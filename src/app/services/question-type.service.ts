import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'

import { Observable } from 'rxjs'

import { AppConfig } from '../AppConfig/appconfig.interface'
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service'

import { QuestionTypeEntity } from '../models/Question.model'

@Injectable({
  providedIn: 'root',
})
export class QuestionTypeService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {}

  getAllQuestionTypes(): Observable<{
    status: number
    questionTypes: QuestionTypeEntity[]
  }> {
    return this.http.get<{
      status: number
      questionTypes: QuestionTypeEntity[]
    }>('/api/questionTypes')
  }
}
