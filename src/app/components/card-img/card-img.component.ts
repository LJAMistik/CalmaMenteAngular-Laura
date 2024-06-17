import { Component, Input } from '@angular/core';

export enum ImgBorderColors {
  login = "login_color",
  register = "register_color",
  password = "password_color",
  clinicas = "clinicas_color"
}

@Component({
  selector: 'app-card-img',
  templateUrl: './card-img.component.html',
  styleUrls: ['./card-img.component.css']
})
export class CardImgComponent {
  @Input() color: ImgBorderColors = ImgBorderColors.login;

  @Input() img = "";
}
