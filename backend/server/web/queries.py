from storage import userdb, get_path
from aiohttp import web
from model import predict
import errors
import pandas
import time
import jwt
import csv


class Queries:
    def __init__(self, config):
        self.config = config
        self.df = pandas.read_csv(get_path("../../activities.csv"), index_col="id")

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
                web.get("/activity", self.fetch_activity),
                web.get("/suggestion", self.suggestion)
            ]
        )

    # curl -X POST -d "name=thomas" -d "age=18" -d "activities=['sport']" -d "hours=[]" localhost:8080/register
    async def register(self, request):
        data = await request.json()
        user = dict({"name": None, "age": None, "activities": None, "hours": None, "notification_occurences" : None})
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

    # curl -X POST localhost:8080/unregister -H "Authorization:TOKEN"
    async def unregister(self, request):
        if request.id != None:
            if str(request.id) in userdb:
                del userdb[str(request.id)]
                return web.json_response({"unregistered": True})
            else:
                raise errors.Unauthorized("Not registered")
        else:
            raise errors.Unauthorized("A valid token is required")

    # curl -X POST localhost:8080/logout -H "Authorization:TOKEN"
    async def logout(self, request):
        if request.id != None:
            self.EXPIRED_TOKENS.add(request.headers.get("Authorization", None))
            return web.json_response({"disconnected": True})
        else:
            raise errors.Unauthorized("A valid token is required")

    # curl "http://localhost:8080/activity?itemid=3" -H "Authorization:TOKEN"
    async def fetch_activity(self, request):
        if request.id == None:
            raise errors.Unauthorized("A valid token is required")

        activity_id = int(request.rel_url.query["itemid"])
        if activity_id >= len(self.df):
            raise errors.UserError("this id is too big")

        with open(get_path("../../interactions.csv"), "a") as output_csv:
            writer = csv.writer(output_csv)
            writer.writerow([request.id, activity_id, 1, int(time.time())])

        output = self.df.iloc[activity_id].to_json()
        return web.Response(text=output)

    async def suggestion(self, request):
        if request.id == None or request.id not in userdb:
            raise errors.Unauthorized("A valid token is required")
        userdb[request.id]
        print(user_actions)
        for i, (item_id, proba) in enumerate(predict(request.id)):
            print(i, item_id, proba)