import { AppState } from '../state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getAppFeatureState = createFeatureSelector<AppState>('appState');

export const getNavigation = createSelector(
    getAppFeatureState,
    state => state.navigation
)
