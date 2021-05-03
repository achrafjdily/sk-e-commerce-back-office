import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { from, fromEvent, Observable, of, throwError } from 'rxjs';
import { AuthService } from 'src/app/user-state/services/auth.service';
import { switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';

@Injectable({
  providedIn: 'any'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService, public router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${this.auth.getToken()}`
    //   }
    // });
    // return next.handle(request);
    return from(this.auth.getToken()).pipe(switchMap(token => {
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      return next.handle(request).pipe(catchError((error : HttpErrorResponse) => this.handleAuthError(error)));
    }))
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
        //navigate /delete cookies or whatever
        this.router.navigateByUrl(`/`);
        // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
        return of(err.message); // or EMPTY may be appropriate here
    }
    return throwError(err);
}
}