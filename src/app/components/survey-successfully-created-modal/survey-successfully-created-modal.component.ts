import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Router } from '@angular/router'

@Component({
  selector: 'app-survey-successfully-created-modal',
  templateUrl: './survey-successfully-created-modal.component.html',
})
export class SurveySuccessfullyCreatedModalComponent {
  linkSurvey = `http://localhost:4200/survey/${this.data.surveyId}/answer`

  constructor(
    private modalRef: MatDialogRef<SurveySuccessfullyCreatedModalComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { surveyId: string }
  ) {}

  onClose(): void {
    this.modalRef.close()
    this.router.navigate(['/', 'home'])
  }

  onCopyLink(): void {
    navigator.clipboard.writeText(this.linkSurvey)
  }
}
