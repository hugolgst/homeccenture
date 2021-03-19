import aiohttp_cors
import logging
from aiohttp import web
from .queries import Queries
from errors import UserError

logger = logging.getLogger(__name__)


class WebAPI:
    def __init__(self, config):
        self.config = config
        self.app = web.Application(
            middlewares=[self.error_middleware, self.auth_middleware],
            client_max_size=0.5 * 2 ** 30,
        )  # 0.5 GiB
        cors = aiohttp_cors.setup(
            self.app,
            defaults={
                "*": aiohttp_cors.ResourceOptions(
                    allow_credentials=True, expose_headers="*", allow_headers="*",
                )
            },
        )
        Queries(config).register_routes(self.app)
        self.app.on_response_prepare.append(self.on_prepare)
        for route in list(self.app.router.routes()):
            cors.add(route)

    def start(self):
        web.run_app(self.app, port=self.config.port)

    async def on_prepare(self, request, response):
        response.headers[
            "Server"
        ] = f"{self.config.__title__} v{self.config.__version__}"

    @web.middleware
    async def error_middleware(self, request, handler):
        try:
            response = await handler(request)
            if response.status < 400:  # if no error coccured
                return response
            message = response.message
            status = response.status

        except web.HTTPException as exception:
            message = exception.reason
            status = 500

        except Exception as exception:
            if not isinstance(exception, UserError):
                logger.exception(exception)
            message = exception.args[0]
            status = 500

        return web.json_response({"error": message}, status=status)

    async def auth_middleware(self, app, handler):
        async def middleware(request):
            request.password = request.headers.get("Authorization", None)
            return await handler(request)

        return middleware
