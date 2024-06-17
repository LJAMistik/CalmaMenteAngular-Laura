import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-feedback',
  templateUrl: './modal-feedback.component.html',
  styleUrls: ['./modal-feedback.component.css']
})
export class ModalFeedbackComponent {

  @Input() msg!:string;
  @Input() statusModal!:boolean;

  @Output() onClose: EventEmitter<void> = new EventEmitter();


  public handleClose() {
    this.onClose.emit()
  }
}
