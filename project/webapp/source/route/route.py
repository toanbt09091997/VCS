from source.service.auth import SignupApi, LoginApi
from source.service.accounts import AccountApi, AccountsApi, AccountApiPaginate
def initialize_routes(api):
    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')

    api.add_resource(AccountsApi, '/api/accounts')
    api.add_resource(AccountApi, '/api/accounts/<account_number>')
    api.add_resource(AccountApiPaginate, '/api/accountspaginate')