import { AppState } from './../state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getAppFeatureState = createFeatureSelector<AppState>('appState');

export const getIsLoggedIn = createSelector(
    getAppFeatureState,
    state => state.isLoggedIn
)

export const getUser = createSelector(
    getAppFeatureState,
    state => state.user
)

export const getToken = createSelector(
    getAppFeatureState,
    state => state.token
)
