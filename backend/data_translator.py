import pandas as pd
import json
from itertools import groupby
from collections import OrderedDict


def csv_to_json(name) -> json:
    data_csv = pd.read_csv(name)
    results = []
    for id_iteam, bag in data_csv.groupby(["id"]):
        contents_df = bag.drop(["id"], axis=1)
        subset = [OrderedDict(row) for i, row in contents_df.iterrows()]
        results.append(OrderedDict([(id_iteam, subset)]))
    data_json = json.loads(json.dumps(results))
    return data_json

x = csv_to_json("data.csv")
