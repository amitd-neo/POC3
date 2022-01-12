import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  BASE_URL = 'http://localhost:8081/api/user/';
  constructor(private _http: HttpClient) {}

  saveUser(user: any): Observable<any> {
    return this._http.post(this.BASE_URL, user);
  }
  getUsers(): Observable<any> {
    return this._http.get(this.BASE_URL);
  }
  getUsersByOrder(): Observable<any> {
    return this._http.get(this.BASE_URL + 'orderByDoj/');
  }
  getUsersByName(name: string): Observable<any> {
    return this._http.get(this.BASE_URL + 'name/' + name);
  }
  getUsersByPinCode(pinCode: string): Observable<any> {
    return this._http.get(this.BASE_URL + 'pinCode/' + pinCode);
  }

  userSoftDelete(id: string): Observable<any> {
    console.log(this.BASE_URL + 'soft/' + id);
    return this._http.delete(this.BASE_URL + 'soft/' + id);
  }
  userHardDelete(id: string): Observable<any> {
    console.log(this.BASE_URL + 'hard/' + id);
    return this._http.delete(this.BASE_URL + 'hard/' + id);
  }
}
