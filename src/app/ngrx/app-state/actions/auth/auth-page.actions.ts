import { LoginRequest } from '../../models/login-request.model';
import { createAction, props } from "@ngrx/store";

export const login = createAction(
    '[Auth PAGE] Login',
    props<{ loginRequest: LoginRequest }>()
);

export const logout = createAction(
    '[Auth PAGE] Logout'
);

export const initToken = createAction(
    '[Auth PAGE] Init Token'
);

export const checkAuth = createAction(
    '[Auth PAGE] Check Auth'
);
