import { Component, Input } from '@angular/core';

export enum BtnColors {
  login = "btn_login",
  register = "btn_register",
  password = "btn_password"
}

@Component({
  selector: 'app-btn-pages',
  templateUrl: './btn-pages.component.html',
  styleUrls: ['./btn-pages.component.css']
})
export class BtnPagesComponent {
  @Input() color: BtnColors = BtnColors.login;
  @Input() text = "";
  @Input() disabled: boolean = false;
}
