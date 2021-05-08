import { environment } from './../../../../environments/environment';
import { Injectable } from "@angular/core";

const AUTH_LINKS = environment.apiUrl + "auth/";

@Injectable({
    providedIn: 'platform',
})
export class AuthLinks {
    public readonly LOGIN_LINK = AUTH_LINKS + "login";
    public readonly LOGOUT_LINK = AUTH_LINKS + "logout";
}