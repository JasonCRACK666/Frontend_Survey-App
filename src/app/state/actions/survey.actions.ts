import { createAction, props } from '@ngrx/store'
import { SurveyEntity } from 'src/app/models/Survey.model'

export const setSurveys = createAction(
  '[Home page] Set Surveys',
  props<{ surveys: SurveyEntity[] }>()
)

export const loadStart = createAction(
  '[Home page] Initial loading'
)

export const loadDone = createAction(
  '[Home page] Upload done'
)

export const removeSurvey = createAction(
  '[Home page] Remove survey',
  props<{ surveyId: string }>()
)