import {Injectable, Type} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


import {AuthLoginInfo} from './login-info';
import {JwtResponse} from "./jwt.response";
import {SignUpInfo} from "./sign-up.info";
import {Prop} from "../properties";
import {environment} from "../../environments/environment";
import {any} from "codelyzer/util/function";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn:  'root'
})
export class AuthService {

  private loginUrl = 'https://back-end-furniture.herokuapp.com' + '/furniture/auth/signin/';
  private signupUrl = 'https://back-end-furniture.herokuapp.com' + '/furniture/auth/signup/';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
