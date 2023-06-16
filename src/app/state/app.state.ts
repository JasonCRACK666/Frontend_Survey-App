import { ActionReducerMap } from '@ngrx/store'

import { AuthState } from './models/auth.state'
import { SurveyState } from './models/survey.state'

import { authReducers } from './reducers/auth.reducers'
import { surveyReducers } from './reducers/survey.reducers'

export interface AppState {
  auth: AuthState
  surveys: SurveyState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducers,
  surveys: surveyReducers,
}
