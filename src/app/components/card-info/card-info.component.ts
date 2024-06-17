import { Component, Input } from '@angular/core';

export enum h2Colors {
  ansiedade = "h2_ansiedade",
  tdah = "h2_tdah",
  depressao = "h2_depressao"
}

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class ModalInfoComponent {
  @Input() h2Color: h2Colors = h2Colors.ansiedade;

  @Input() title!: string;

  @Input() description!: string;

  public modalIsOpen = false;

  public toggleModal() {
    this.modalIsOpen = !this.modalIsOpen
  }


}
