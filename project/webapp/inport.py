import json
from pymongo import MongoClient
from pprint import pprint
from random import randint
client = MongoClient("mongodb://localhost:27017/")
db=client.admin
f = open("accounts.json", "r")
for x in f:
    db.accounts.insert_one(json.loads(x))