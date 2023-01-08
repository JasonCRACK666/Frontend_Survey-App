import { SurveyEntity } from 'src/app/models/Survey.model';

export interface SurveyState {
  loading: boolean,
  surveys: SurveyEntity[]
}