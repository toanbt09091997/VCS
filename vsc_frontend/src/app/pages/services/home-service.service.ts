import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  url = `http://127.0.0.1:5000/api/`;
  token = window.sessionStorage.getItem('token');

  constructor(
    private http: HttpClient
  ) {
  }

  getAllListAccount(options: any): Observable<any> {
    return this.http.post(this.url + `accountspaginate`, options);
  }
  findByKeyword(keyword: string): Observable<any>{
    return this.http.get(this.url + `/findByKeyword/${keyword}`);
  }
  findByName(columnName: string, keyword: string): Observable<any>{
    return this.http.get(this.url + `/findByName/${columnName}/${keyword}`);
  }
 // accounts/<account_number>
  createAccount(datas: any): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        })
      };
    return this.http.post(this.url + `accounts`, datas, httpOptions);
  }

  updateAccount(accs: string, data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.http.put(this.url + `accounts/${accs}`, data, httpOptions);
  }

  deleteAccount(accs: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.http.delete(this.url + `accounts/${accs}`, httpOptions);
  }
}
