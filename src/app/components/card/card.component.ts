import { Component, Input } from '@angular/core';

export enum Colors {
  ansiedade = "card_ansiedade",
  tdah = "card_tdah",
  depressao = "card_depressao",
  api = "card_api"
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() route = "";

  @Input() text = ""; 

  @Input() img = "";

  @Input() color: Colors = Colors.ansiedade; 
}
