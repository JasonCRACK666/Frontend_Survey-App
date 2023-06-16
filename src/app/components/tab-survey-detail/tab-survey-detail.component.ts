import { Component, Input } from '@angular/core'

import { SurveyDetailDataAnswers } from 'src/app/models/Survey.model'

@Component({
  selector: 'app-tab-survey-detail',
  templateUrl: './tab-survey-detail.component.html',
})
export class TabSurveyDetailComponent {
  @Input() surveyDetail!: SurveyDetailDataAnswers
}
