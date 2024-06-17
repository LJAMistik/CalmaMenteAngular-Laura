import { Component } from '@angular/core';
import { BtnColors } from 'src/app/components/btn-pages/btn-pages.component';
import { ImgBorderColors } from 'src/app/components/card-img/card-img.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'; // INSERIDO POR LAURA


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  private mockedData = [
    {
      email: "user@profissional.com",
      senha: "profissional@123",
      userType: true,
    },
    {
      email: "user@user.com",
      senha: "user@123",
      userType: false,
    }
  ]
  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;
  public ImgBorderColors = ImgBorderColors;
  public BtnColors = BtnColors;
  public errors?: string;

  public loginForm = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    userType: new FormControl(false)
  });

  public handleClose() {
    this.errors = undefined;
  }

  constructor(private route: Router, private authService: AuthService) {} // INSERIDO POR LAURA {private authService: AuthService}

  public onSubmit() {
    console.log(this.loginForm.value);
    
    const checkData = this.mockedData.find(item => item.email === this.loginForm.value.email);
    console.log(checkData?.userType === this.loginForm.value.userType);
    if (!checkData || 
          !( checkData.senha===this.loginForm.value.senha 
            && checkData.userType===this.loginForm.value.userType
            )
        ) {
      this.errors = "Seus dados estão incorretos!";
      return;
    }

    const token = 'dummy-token'; // INSERIDO POR LAURA
    this.authService.login(token); // INSERIDO POR LAURA
    this.route.navigate(['/']);

  }
}
