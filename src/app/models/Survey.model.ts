import { QuestionWithAnswers, SendQuestion } from './Question.model'

export interface SurveyEntity {
  id: string
  title: string
  description: string
  created_at: string
  updated_at: string
}

export interface SurveyDetailDataAnswers extends SurveyEntity {
  completeds: number
  questions: QuestionWithAnswers[]
}

export interface SendSurvey {
  title: string
  description: string
  questions: SendQuestion[]
}

export interface SurveyUserEntity extends SurveyEntity {
  avatar: string
  username: string
}
