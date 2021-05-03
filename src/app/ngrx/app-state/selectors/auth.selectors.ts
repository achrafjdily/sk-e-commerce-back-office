import { AppState } from './../state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getAuthFeatureState = createFeatureSelector<AppState>('appState');

export const getIsLoggedIn = createSelector(
    getAuthFeatureState,
    state => state.isLoggedIn
)
