from aiohttp import web
import errors
from storage import userdb
import time
import jwt


class Queries:
    def __init__(self, config):
        self.config = config

        # todo: read from config
        self.JWT_ALGORITHM = "HS256"
        self.JWT_SECRET = "0"  # secrets.token_bytes(16)
        self.EXPIRED_TOKENS = set()

    def register_routes(self, app):
        app.add_routes(
            [
                web.post("/register", self.register),
                web.post("/unregister", self.unregister),
                web.post("/logout", self.logout),
            ]
        )

    # curl -X POST -d "name=thomas" -d "age=18" localhost:8080/register
    async def register(self, request):
        data = await request.post()
        user = dict({"name": None, "age": None})
        for key in user:
            if not key in data:
                print("MISSING KEY:", key)
                raise errors.InvalidWebInput(f"missing key: {key}")
            user[key] = data[key]

        user_id = len(userdb)
        userdb[user_id] = user
        payload = {"id": user_id}
        token = jwt.encode(payload, self.JWT_SECRET, self.JWT_ALGORITHM)
        return web.json_response({"registered": True, "token": token.decode("utf-8")})

    # curl -X POST localhost:8080/unregister -H "Authorization:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MH0.BzrKJpA15ObR-l-YM5TssVAwGAuOns0tLVg6MjqvOTs"
    async def unregister(self, request):
        if request.id != None:
            if str(request.id) in userdb:
                del userdb[str(request.id)]
                return web.json_response({"unregistered": True})
            else:
                raise errors.Unauthorized("Not registered")
        else:
            raise errors.Unauthorized("No token to blacklist")

    # curl -X POST localhost:8080/logout -H "Authorization:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MH0.BzrKJpA15ObR-l-YM5TssVAwGAuOns0tLVg6MjqvOTs"
    async def logout(self, request):
        if request.id != None:
            self.EXPIRED_TOKENS.add(request.headers.get("Authorization", None))
            return web.json_response({"disconnected": True})
        else:
            raise errors.Unauthorized("No token to blacklist")
