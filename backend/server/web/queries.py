from aiohttp import web
from errors import InvalidWebInput, Unauthorized
import time


class Queries:
    def __init__(self, config):
        self.config = config

    def register_routes(self, app):
        app.add_routes(
            [
                web.post("/register", self.register),
            ]
        )

    # curl -X POST localhost:8080/register
    async def register(self, request):
        data = await request.post()
        return web.json_response({ "test" : "hello world" })