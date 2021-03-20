import pandas as pd
import json
from itertools import groupby
from collections import OrderedDict


def csv_to_json(name) -> json:
    data_csv = pd.read_csv(name)
    results = []
    for id_iteam, bag in data_csv.groupby(["id"]):
        contents_df = bag.drop(["id"], axis=1)
        subset = [OrderedDict(row) for i,row in contents_df.iterrows()]
        results.append(OrderedDict([(id_iteam, subset)]))
    return json.dumps(results[0], indent=4)



x = csv_to_json("data.csv")