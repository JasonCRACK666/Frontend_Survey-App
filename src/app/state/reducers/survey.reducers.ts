import { createReducer, on } from '@ngrx/store'

import { loadDone, loadStart, removeSurvey, setSurveys } from '../actions/survey.actions'

import { SurveyState } from '../models/survey.state'

export const initialState: SurveyState = {
  loading: false,
  surveys: []
}

export const surveyReducers = createReducer(
  initialState,
  on(loadStart, state => ({ ...state, loading: true })),
  on(loadDone, state => ({ ...state, loading: false })),
  on(setSurveys, (state, { surveys }) => ({ ...state, surveys })),
  on(removeSurvey, (state, { surveyId }) => ({ ...state, surveys: state.surveys.filter(survey => survey.id !== surveyId) }))
)
