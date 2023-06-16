import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router'

import { AnswerEntity } from 'src/app/models/Answer.model'
import { SendQuestionDetail } from 'src/app/models/Question.model'
import { SurveyUserEntity } from 'src/app/models/Survey.model'

import { AnswerService } from 'src/app/services/answer.service'
import { SurveyService } from 'src/app/services/survey.service'

@Component({
  selector: 'app-answer-survey',
  templateUrl: './answer-survey.component.html',
})
export class AnswerSurveyComponent implements OnInit {
  loadingSurvey = true
  loadSendingAnswers = false

  responseSurvey: FormGroup = this.form.group({
    answers: this.form.array([], Validators.minLength(1)),
  })

  questions: SendQuestionDetail[] = []
  survey: SurveyUserEntity = {
    id: '',
    avatar: '',
    username: '',
    title: '',
    description: '',
    created_at: '',
    updated_at: '',
  }

  constructor(
    private surveyService: SurveyService,
    private answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router,
    private form: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const surveyId = <string>this.route.snapshot.paramMap.get('surveyId')
    this.surveyService
      .getSurvey(surveyId)
      .subscribe(({ survey, questions }) => {
        this.survey = survey
        this.questions = questions
        questions.forEach(question => {
          this.answers.push(
            this.form.group({
              questionId: [question.id, Validators.required],
              response: ['', [Validators.required, Validators.minLength(4)]],
            })
          )
        })
        this.loadingSurvey = false
      })
  }

  get answers(): FormArray {
    return this.responseSurvey.get('answers') as FormArray
  }

  onSendAnswersSurvey(): void {
    this.loadSendingAnswers = true
    if (this.responseSurvey.invalid) {
      this._snackBar.open('Aún no ha completado la encuesta', undefined, {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 4000,
      })
      this.loadSendingAnswers = false
      return
    }

    this.answerService
      .answerSurvey(
        this.survey.id,
        this.responseSurvey.value.answers as AnswerEntity[]
      )
      .subscribe(() => {
        this.loadSendingAnswers = false
        this.router.navigateByUrl('/survey/completed')
      })
    this.loadSendingAnswers = false
  }
}
