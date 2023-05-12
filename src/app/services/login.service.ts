import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { loginModel } from '../models/loginModel';
import { userModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = `http://localhost:9292/`;
  private dataLogin!: loginModel | any;
  private dataUser!: userModel | any;

  private authetication: string = 'authentication'
  private login: string = 'login';

  constructor(
    private http: HttpClient
  ) { }

  getUser(email: string): Observable<loginModel> {
    this.dataLogin = this.http
      .get<loginModel>(`${this.baseUrl}${this.authetication}/${email}`);

    return this.dataLogin;
  }

  getUserId(id: string): Observable<userModel> {
    this.dataUser = this.http
      .get<userModel>(`${this.baseUrl}${this.login}/${id}`);

    return this.dataUser;
  }
}
