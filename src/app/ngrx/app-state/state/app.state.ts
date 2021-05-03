import { User } from './../models/user.model';
export interface AppState {
    user: User;
    token: string;
    isLoggedIn: boolean;
}

export const initialState: AppState = {
    user: null,
    token: null,
    isLoggedIn: false
};