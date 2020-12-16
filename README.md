# VCS
db mongodb
create mongoDB
host: localhost:27017

database:
admin table: accouts
      table: user

backend python
(khởi tạo môi trường virtualenv) -- môi trường ảo
virtualenv project

run backend
tại thư mục project-vcs -- run cmd -- project\Scripts\activate
run cmd -- pip install -r requiments.txt --// inport thư viện
run terminal -- python ./inport.py --// inport databasce file json
run terminal -- python ./app.py --// run backend

http://127.0.0.1:5000/api/auth/login --// post -- login
http://127.0.0.1:5000/api/auth/signup --// post -- create account


http://127.0.0.1:5000/api/accountspaginate --// post phân trang
http://127.0.0.1:5000/api/accounts/<account-number> --// get put del -- thêm sửa xóa
http://127.0.0.1:5000/api/accounts  --// post thêm mới

frontend angular

npm i
npm start
