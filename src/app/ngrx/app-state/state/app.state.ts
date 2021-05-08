import { NavItem } from './../../../shared/menu-items/menu-items';
import { User } from './../models/user.model';
export interface AppState {
    user: User;
    token: string;
    isLoggedIn: boolean;
    navigation : NavItem[];
}

export const initialState: AppState = {
    user: null,
    token: null,
    isLoggedIn: false,
    navigation : [],
};