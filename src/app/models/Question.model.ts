import { ResponseText } from './Answer.model'

export interface QuestionEntity {
  id: string
  survey_id: string
  question_type_id: string
  question: string
  options?: SendOption[]
}

export interface QuestionWithAnswers {
  id: string
  question_type: string
  question: string
  responses?: ResponseText[]
  options?: OptionWithSelected[]
}

export interface OptionEntity {
  id: string
  option: string
}

export interface OptionWithSelected extends OptionEntity {
  selections: number
}

export interface SendOption {
  value: string
}

export interface SendQuestion {
  question_type_id: string
  question: string
  options?: SendOption[]
}

export interface QuestionTypeEntity {
  id: string
  name: string
}

export interface SendQuestionDetail extends Omit<QuestionEntity, 'survey_id' | 'question_type_id' | 'options'> {
  question_type: string
  options?: OptionEntity[]
}