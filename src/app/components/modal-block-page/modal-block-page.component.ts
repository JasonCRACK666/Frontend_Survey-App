import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-modal-block-page',
  templateUrl: './modal-block-page.component.html',
})
export class ModalBlockPageComponent {
  constructor(
    private modalRef: MatDialogRef<ModalBlockPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}
}
