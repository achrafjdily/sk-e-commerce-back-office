import { User } from './../models/user.model';
import { LoginResponse } from './../models/login-response.model';
import { createAction, props } from "@ngrx/store";

export const loginSuccess = createAction(
    '[Auth API] Login Success',
    props<{ loginResponse: LoginResponse }>()
);

export const loginFailure = createAction(
    '[Auth API] Login Failure',
    props<{ error: Error }>()
);

export const CheckAuthSuccess = createAction(
    '[Auth API] Check Auth Success',
    props<{ user: User }>()
);

export const CheckAuthFailure = createAction(
    '[Auth API] Check Auth Failure',
    props<{ error: Error }>()
);