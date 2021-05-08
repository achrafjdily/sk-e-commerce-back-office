import { AppState, initialState } from './../state/app.state';
import { createReducer, on } from '@ngrx/store';
import { AuthApiActions, AuthPageActions } from '../actions/auth';
import { AuthService } from '../services/auth/auth.service';
import { NavigationPageActions } from '../actions/navigation';

export const appReducer = createReducer<AppState>(initialState,
  on(AuthApiActions.loginSuccess, (state, action): AppState => {
    return {
      ...state,
      user: action.loginResponse.user,
      token: action.loginResponse['full_token'],
      isLoggedIn: true
    }
  }),
  on(AuthApiActions.logoutSuccess, (state, action): AppState => {
    return {
      ...state,
      user: null,
      token: null,
      isLoggedIn: false
    }
  }),
  on(AuthPageActions.initToken, (state, action): AppState => {
    return {
      ...state,
      token: AuthService.getToken(),
      user : AuthService.getUser(),
      isLoggedIn: AuthService.getIsLoggedIn()
    }
  }),
  on(NavigationPageActions.registerNavigation, (state, action): AppState => {
    return {
      ...state,
      navigation : [...state.navigation,...action.navItems]
    }
  }),
);

