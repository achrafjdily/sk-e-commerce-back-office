import { AppState, initialState } from './../state/app.state';
import { createReducer, on } from '@ngrx/store';
import { AuthApiActions, AuthPageActions } from '../actions';
import { AuthService } from '../services/auth/auth.service';

export const appReducer = createReducer<AppState>(initialState,
  on(AuthApiActions.loginSuccess, (state, action): AppState => {
    return {
      ...state,
      user: action.loginResponse.user,
      token: action.loginResponse['full_token'],
      isLoggedIn: true
    }
  }),
  on(AuthPageActions.initToken, (state, action): AppState => {
    return {
      ...state,
      token: AuthService.getToken(),
      isLoggedIn: AuthService.getIsLoggedIn()
    }
  }),
);

