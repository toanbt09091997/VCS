from .db import db
from flask_bcrypt import generate_password_hash, check_password_hash

class Accounts(db.Document):
    account_number = db.IntField(required=True, unique=True)
    balance = db.FloatField(required=True)
    firstname = db.StringField(required=True)
    lastname = db.StringField(required=True)
    age = db.IntField(required=True)
    gender = db.StringField(required=True,  max_length=1)
    address = db.StringField(required=True)
    employer = db.StringField(required=True)
    email = db.EmailField(required=True)
    city = db.StringField(required = True)
    state = db.StringField(required=True)

class User(db.Document):
    name = db.StringField(required=True, unique=True)
    password = db.StringField(required=True, min_length=6)
    role = db.StringField(required=False)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)
