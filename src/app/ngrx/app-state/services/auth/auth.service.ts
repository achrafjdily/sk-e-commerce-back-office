import { tap, map } from 'rxjs/operators';
import { LoginResponse } from './../../models/login-response.model';
import { AuthLinks } from './../auth.links';
import { LoginRequest } from './../../models/login-request.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private links: AuthLinks,private router: Router) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.links.LOGIN_LINK, loginRequest).pipe(
      tap(
        loginResponse => {
          localStorage.setItem('token', `${loginResponse.token_type} ${loginResponse.access_token}`);
          this.router.navigateByUrl('/');
        }
      ),
      map(
        loginResponse => {
          loginResponse['full_token'] = `${loginResponse.token_type} ${loginResponse.access_token}`;
          return loginResponse;
        }
      )
    );
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

  static getToken(): string {
    return localStorage.getItem('token');
  }

  static getIsLoggedIn(): boolean {
    if (this.getToken() && this.getToken().split(' ')[1] && this.getToken().split(' ')[1].split('.')[0]) {
      try {
        return JSON.parse(atob(this.getToken().split(' ')[1].split('.')[0])).typ == 'JWT';
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  }
}
