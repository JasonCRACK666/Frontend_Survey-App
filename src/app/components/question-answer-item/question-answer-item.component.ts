import { Component, Input } from '@angular/core'
import { FormArray, FormControl, FormGroup } from '@angular/forms'
import { SendQuestionDetail } from 'src/app/models/Question.model'

@Component({
  selector: 'app-question-answer-item',
  templateUrl: './question-answer-item.component.html'
})
export class QuestionAnswerItemComponent {
  @Input() answerIndex = 0
  @Input() answers!: FormArray
  @Input() question!: SendQuestionDetail

  get answer(): FormGroup {
    return this.answers.controls[this.answerIndex] as FormGroup
  }

  get response(): FormControl {
    return this.answer.get('response') as FormControl
  }

  haveError(ctrl: FormControl): boolean {
    return ctrl.invalid && (ctrl.dirty || ctrl.touched)
  }
}
