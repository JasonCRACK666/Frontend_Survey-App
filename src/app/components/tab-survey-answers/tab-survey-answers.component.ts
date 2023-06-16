import { Component, Input } from '@angular/core'

import { SurveyDetailDataAnswers } from 'src/app/models/Survey.model'

@Component({
  selector: 'app-tab-survey-answers',
  templateUrl: './tab-survey-answers.component.html',
})
export class TabSurveyAnswersComponent {
  @Input() surveyAnswers!: SurveyDetailDataAnswers
}
