import { Component, Input } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
})
export class QuestionItemComponent {
  @Input() questions!: FormArray
  @Input() questionForm!: any // FormGroup
  @Input() questionIndex = 0

  get question(): FormControl {
    return this.questionForm.get('question') as FormControl
  }

  get options(): FormArray {
    return this.questionForm.get('options') as FormArray
  }

  haveError(ctrl: FormControl): boolean {
    return ctrl.invalid && (ctrl.dirty || ctrl.touched)
  }

  onRemoveQuestion = (): void => {
    this.questions.removeAt(this.questionIndex)
  }

  onAddNewOption(): void {
    if (this.options) {
      const newOption = new FormGroup({
        value: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
      })
      this.options.push(newOption)
    }
  }
}
