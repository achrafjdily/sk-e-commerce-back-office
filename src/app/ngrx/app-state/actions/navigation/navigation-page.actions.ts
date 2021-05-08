import { NavItem } from './../../../../shared/menu-items/menu-items';
import { createAction, props } from "@ngrx/store";

export const registerNavigation = createAction(
    '[Navigation PAGE] Register Navigation',
    props<{ navItems: NavItem[] }>()
);