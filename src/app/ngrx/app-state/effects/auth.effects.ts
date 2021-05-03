import { AuthService } from './../services/auth/auth.service';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { AuthApiActions, AuthPageActions } from '../actions';



@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private AuthService: AuthService) { }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthPageActions.login),
      switchMap((action) => this.AuthService.login(action.loginRequest).pipe(
        map(loginResponse => AuthApiActions.loginSuccess({ loginResponse: loginResponse })),
        catchError(error => of(AuthApiActions.loginFailure({ error })))
      ))
    )
  })

  // checkAuth$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(AuthPageActions.login),
  //     switchMap((action) => this.AuthService.login(action.loginRequest).pipe(
  //       map(loginResponse => AuthApiActions.loginSuccess({ loginResponse: loginResponse })),
  //       catchError(error => of(AuthApiActions.loginFailure({ error })))
  //     ))
  //   )
  // })


}
