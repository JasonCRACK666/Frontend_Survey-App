import { Component, OnInit } from "@angular/core"
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms"
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'

import { SurveySuccessfullyCreatedModalComponent } from 'src/app/components/survey-successfully-created-modal/survey-successfully-created-modal.component'

import { QuestionTypeEntity } from "src/app/models/Question.model"
import { SendSurvey } from "src/app/models/Survey.model"

import { QuestionTypeService } from "src/app/services/question-type.service"
import { SurveyService } from "src/app/services/survey.service"

@Component({
  selector: "app-create-survey",
  templateUrl: "./create-survey.component.html",
})
export class CreateSurveyComponent implements OnInit {
  loadingOptions = true
  loadingCreateSurvey = false
  surveyForm: FormGroup = new FormGroup({})
  questionTypes: QuestionTypeEntity[] = []

  constructor(
    private form: FormBuilder,
    private _snackBar: MatSnackBar,
    private modal: MatDialog,
    private surveyService: SurveyService,
    private questionTypeService: QuestionTypeService
  ) { }

  ngOnInit(): void {
    this.questionTypeService
      .getAllQuestionTypes()
      .subscribe(({ questionTypes }) => {
        this.questionTypes = questionTypes
        this.loadingOptions = false
      })

    this.surveyForm = this.form.group({
      title: ["", [Validators.required, Validators.minLength(5)]],
      description: ["", [Validators.required, Validators.minLength(5)]],
      questions: this.form.array([]),
    })
  }

  get title(): FormControl {
    return this.surveyForm.get("title") as FormControl
  }

  get description(): FormControl {
    return this.surveyForm.get("description") as FormControl
  }

  get questions(): FormArray {
    return this.surveyForm.get("questions") as FormArray
  }

  onCreateSurvey(): void {
    if (this.surveyForm.invalid) {
      this._snackBar.open('No se completo los campos', 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
      return
    }

    this.loadingCreateSurvey = true
    this.surveyService.createSurvey(<SendSurvey>this.surveyForm.value).subscribe(({ surveyId }) => {
      this.loadingCreateSurvey = false
      this.modal.open(SurveySuccessfullyCreatedModalComponent, {
        data: { surveyId }
      })
    })
  }

  onAddQuestionText(questionType: string): void {
    this.questions.push(this.generateQuestionText(questionType))
  }

  onAddQuestionMulti(questionType: string): void {
    this.questions.push(this.generateQuestionMulti(questionType))
  }

  haveError(control: FormControl): boolean {
    return control.invalid && (control.dirty || control.touched)
  }

  private generateQuestionText(questionType: string): FormGroup {
    return this.form.group({
      question: ["", [Validators.required, Validators.minLength(3)]],
      question_type_id: [questionType, Validators.required],
    })
  }

  private generateQuestionMulti(questionType: string): FormGroup {
    return this.form.group({
      question: ["", [Validators.required, Validators.minLength(3)]],
      question_type_id: [questionType, Validators.required],
      options: this.form.array([
        this.form.group({
          value: ["", [Validators.required, Validators.minLength(3)]],
        }),
      ]),
    })
  }
}
