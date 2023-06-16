import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppState } from '../app.state'

import { SurveyState } from '../models/survey.state'

export const selectSurveys =
  createFeatureSelector<AppState['surveys']>('surveys')

export const selectLoading = createSelector(
  selectSurveys,
  (state: SurveyState) => state.loading
)

export const selectSurveysList = createSelector(
  selectSurveys,
  (state: SurveyState) => state.surveys
)
