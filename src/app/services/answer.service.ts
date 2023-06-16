import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { AppConfig } from '../AppConfig/appconfig.interface'
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service'

import { AnswerEntity } from '../models/Answer.model'
import { SurveyDetailDataAnswers } from '../models/Survey.model'

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {}

  private getAccessToken: string | '' = `Bearer ${localStorage.getItem(
    'token'
  )}`
    ? `Bearer ${localStorage.getItem('token')}`
    : ''

  answerSurvey(
    surveyId: string,
    answers: AnswerEntity[]
  ): Observable<{ status: number; message: string }> {
    return this.http.post<{ status: number; message: string }>(
      `/api/answers/${surveyId}`,
      { answers },
      {
        headers: {
          Authorization: this.getAccessToken,
        },
      }
    )
  }

  surveyDataAnswers(
    surveyId: string
  ): Observable<{ status: number; survey: SurveyDetailDataAnswers }> {
    return this.http.get<{ status: number; survey: SurveyDetailDataAnswers }>(
      `/api/answers/${surveyId}`,
      {
        headers: {
          Authorization: this.getAccessToken,
        },
      }
    )
  }
}
