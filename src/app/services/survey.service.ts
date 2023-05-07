import { HttpClient } from '@angular/common/http'
import { Injectable, Inject } from '@angular/core'

import { Observable } from 'rxjs'

import { AppConfig } from '../AppConfig/appconfig.interface'
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service'

import {
  SendSurvey,
  SurveyEntity,
  SurveyUserEntity,
} from '../models/Survey.model'
import { SendQuestionDetail } from '../models/Question.model'

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private readonly SURVEY_PATH = '/api/surveys'

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {}

  private getAccessToken: string | '' = localStorage.getItem('token')
    ? `Bearer ${localStorage.getItem('token')}`
    : ''

  getAllSurveys(): Observable<{ status: number; surveys: SurveyEntity[] }> {
    return this.http.get<{ status: number; surveys: SurveyEntity[] }>(
      this.SURVEY_PATH,
      {
        headers: {
          Authorization: this.getAccessToken,
        },
      }
    )
  }

  getSurvey(surveyId: string): Observable<{
    status: number
    survey: SurveyUserEntity
    questions: SendQuestionDetail[]
  }> {
    return this.http.get<{
      status: number
      survey: SurveyUserEntity
      questions: SendQuestionDetail[]
    }>(`${this.SURVEY_PATH}/${surveyId}`)
  }

  completedSurvey(
    surveyId: string
  ): Observable<{ status: number; isCompleted: boolean }> {
    return this.http.get<{
      status: number
      isCompleted: boolean
    }>(`${this.SURVEY_PATH}/${surveyId}/isComplete`, {
      headers: {
        Authorization: this.getAccessToken,
      },
    })
  }

  createSurvey(
    createSurvey: SendSurvey
  ): Observable<{ status: number; message: string; surveyId: string }> {
    return this.http.post<{
      status: number
      message: string
      surveyId: string
    }>(this.SURVEY_PATH, createSurvey, {
      headers: {
        Authorization: this.getAccessToken,
      },
    })
  }

  deleteSurveyById(
    surveyId: string
  ): Observable<{ status: number; message: string }> {
    return this.http.delete<{ status: number; message: string }>(
      `${this.SURVEY_PATH}/${surveyId}`,
      {
        headers: {
          Authorization: this.getAccessToken,
        },
      }
    )
  }
}
