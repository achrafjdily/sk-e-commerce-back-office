import { getToken } from './../../ngrx/app-state/selectors/auth.selectors';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { from, fromEvent, Observable, of, throwError } from 'rxjs';
import { switchMap, catchError, first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'any'
})
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(public router: Router, private store: Store) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(
      first(),
      switchMap(token => {
        if (token) {
          request = request.clone({
            setHeaders: {
              Authorization: token
            }
          });
        }
        return next.handle(request).pipe(catchError((error: HttpErrorResponse) => this.handleAuthError(error)));
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