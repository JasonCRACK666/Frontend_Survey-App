import { createSelector, createFeatureSelector } from '@ngrx/store'

import { AppState } from '../app.state'

import { AuthState } from '../models/auth.state'

export const selectAuth = createFeatureSelector<AppState['auth']>('auth')

export const selectUser = createSelector(
  selectAuth,
  (state: AuthState) => state.user
)

export const selectToken = createSelector(
  selectAuth,
  (state: AuthState) => state.token
)
