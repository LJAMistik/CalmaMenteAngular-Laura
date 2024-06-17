import { Component, Input, OnInit } from '@angular/core'; // INSERIDO POR LAURA: {OnInit}
import { ImgBorderColors } from 'src/app/components/card-img/card-img.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';
import { FormGroup, FormControl } from '@angular/forms';
import { BtnColors } from 'src/app/components/btn-pages/btn-pages.component';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service'; // INSERIDO POR LAURA


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit { // INSERIDO POR LAURA: {OnInit}
  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;
  public ImgBorderColors = ImgBorderColors;
  public BtnColors = BtnColors;

  public userProfileForm = new FormGroup ({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    email: new FormControl(''),
  })

  @Input() readonly:boolean = true;

  // INSERIDO POR LAURA
  public isLoggedIn: boolean = false;
  public user: any = {
    username: '',
    email: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  // Fim da inserção de Laura 

  public editEnable() {
    this.readonly = !this.readonly;
  }
}
