import { Component, Input } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

import { Store } from '@ngrx/store'
import { removeSurvey } from 'src/app/state/actions/survey.actions'

import { SurveyEntity } from 'src/app/models/Survey.model'

import { SurveyService } from 'src/app/services/survey.service'

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
})
export class SurveyItemComponent {
  constructor(
    private store: Store,
    private _snackBar: MatSnackBar,
    private surveyService: SurveyService
  ) {}

  @Input() surveyItem: SurveyEntity = {
    id: '',
    title: '',
    description: '',
    created_at: '',
    updated_at: '',
  }

  onDeleteSurvey(): void {
    this.surveyService
      .deleteSurveyById(this.surveyItem.id)
      .subscribe(({ message }) => {
        this.store.dispatch(removeSurvey({ surveyId: this.surveyItem.id }))
        this._snackBar.open(message, undefined, {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 3000,
        })
      })
  }

  onCopyLinkSurvey(): void {
    navigator.clipboard.writeText(
      `http://localhost:4200/survey/${this.surveyItem.id}/answer`
    )
    this._snackBar.open('Se ha copiado el link de la encuesta', undefined, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    })
  }
}
