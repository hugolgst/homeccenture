from aiohttp import web
from errors import InvalidWebInput, Unauthorized
import time


class Queries:
    def __init__(self, config):
        self.config = config

    def register_routes(self, app):
        app.add_routes([])
