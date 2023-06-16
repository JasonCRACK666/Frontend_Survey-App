import { Component, Input } from '@angular/core'
import { FormArray, FormControl } from '@angular/forms'

@Component({
  selector: 'app-option-item',
  templateUrl: './option-item.component.html',
})
export class OptionItemComponent {
  @Input() options: FormArray = new FormArray<any>([])
  @Input() optionForm!: any
  @Input() optionIndex = 0

  get value(): FormControl {
    return this.optionForm.get('value') as FormControl
  }

  haveError(ctrl: FormControl): boolean {
    return ctrl.invalid && (ctrl.dirty || ctrl.touched)
  }

  onRemoveOption(): void {
    if (this.options && this.options.length > 0) {
      this.options.removeAt(this.optionIndex)
    }
  }
}
