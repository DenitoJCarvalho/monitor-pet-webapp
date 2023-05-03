import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { loginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = `http://localhost:9292/authentication`;
  private dataLogin!: loginModel | any;

  constructor(
    private http: HttpClient
  ) { }

  getUser(email: string): Observable<loginModel> {
    this.dataLogin = this.http
      .get<loginModel>(`${this.baseUrl}/${email}`)

    return this.dataLogin;
  }
}
