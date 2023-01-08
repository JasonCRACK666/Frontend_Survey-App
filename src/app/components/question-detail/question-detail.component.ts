import { Component, Input } from '@angular/core';

import { QuestionWithAnswers } from 'src/app/models/Question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html'
})
export class QuestionDetailComponent {
  @Input() question!: QuestionWithAnswers
}
