import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  Url = 'http://127.0.0.1:5000/api/';

  constructor(private http: HttpClient) {
  }

  login(user: any): Observable<any> {
    return this.http.post(this.Url + `auth/login`, user);
  }
}
