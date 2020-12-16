from flask import Response, request
from database.models import Accounts, User
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource
import json

class AccountsApi(Resource):
    def get(self):
        accounts = Accounts.objects().to_json()
        return Response(accounts, mimetype="application/json", status=200)

    @jwt_required
    def post(self):
        body = request.get_json()
        account =  Accounts(**body)
        account.save()
        id = account.id
        return {'id': str(id)}, 200

class AccountApiPaginate(Resource):
    def post(self):
        body = request.get_json()
        total = Accounts.objects().count()
        offset = (body['page']) * body['limit']
        accounts = Accounts.objects().order_by('account_number').limit(body['limit']).skip(offset).to_json()
        size = len(json.loads(accounts))
        data = {
            'account': json.loads(accounts),
            'size': size,
            'total': total,
            'page': body['page'],
            'limit': body['limit'],
            'nextpage':  body['page'] + 1
        }
        return Response(json.dumps(data), mimetype="application/json", status=200)
        
class AccountApi(Resource):
    @jwt_required
    def put(self, account_number):
        body = request.get_json()
        Accounts.objects.get(account_number=account_number).update(**body)
        return '', 200
    
    @jwt_required
    def delete(self, account_number):
        account = Accounts.objects.get(account_number=account_number)
        account.delete()
        return '', 200

    def get(self, account_number):
        print(account_number)
        account = Accounts.objects.get(account_number=account_number).to_json()
        return Response(account, mimetype="application/json", status=200)
