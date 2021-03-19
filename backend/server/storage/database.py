import os
import json
import collections

collections_abc = getattr(collections, 'abc', collections)

class SavedList(collections_abc.MutableSequence):
    def __init__(self, file_name, l=[]):
        if type(l) is not list:
            raise ValueError()
        self.file = get_path(file_name)
        self._inner_list = l

    def __len__(self):
        return len(self._inner_list)

    def __delitem__(self, index):
        self._inner_list.__delitem__(index - 1)

    def insert(self, index, value):
        self._inner_list.insert(index - 1, value)

    def __setitem__(self, index, value):
        self._inner_list.__setitem__(index - 1, value)

    def __getitem__(self, index):
        return self._inner_list.__getitem__(index - 1)


def get_path(name):
    return os.path.join(os.path.dirname(os.path.realpath(__file__)), name)

users = SavedList("files/users.json")
users.append({5})

print(users)