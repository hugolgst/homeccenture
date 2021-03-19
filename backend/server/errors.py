class UserError(Exception):
    pass


class InvalidWebInput(UserError):
    pass


class Unauthorized(UserError):
    pass
