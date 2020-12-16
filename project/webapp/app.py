from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

from database.db import initialize_db
from flask_restful import Api
from source.route.route import initialize_routes
from flask_cors import CORS,cross_origin

app = Flask(__name__)
# app.config.from_envvar('ENV_FILE_LOCATION')
app.config["JWT_SECRET_KEY"] = "t1NP63m4wnBg6nyHYKfmc2TpCOGI4nss"
cors = CORS(app, resources={r"/*": {"origins": "*"}},support_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/admin'
}

initialize_db(app)

initialize_routes(api)

app.run()