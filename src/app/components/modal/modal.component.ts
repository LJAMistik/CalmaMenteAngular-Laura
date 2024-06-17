import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() description!: string;
  @Input() title!: string;

  @Output() onClose: EventEmitter<void> = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {}

  public handleClose() {
    this.onClose.emit()
  }

  public getSecureHtml() {
    return this.sanitizer.bypassSecurityTrustHtml(this.description);
  }
}
