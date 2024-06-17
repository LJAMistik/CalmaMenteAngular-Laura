import { Component, Input, OnInit } from '@angular/core'; // INSERIDO POR LAURA { OnInit }
import { Router } from '@angular/router'; // INSERIDO POR LAURA
import { AuthService } from 'src/app/services/auth.service';  // INSERIDO POR LAURA

export enum headerColors {
  home = "header_home",
  ansiedade = "header_ansiedade",
  tdah = "header_tdah",
  depressao = "header_depressao",
  clinicas = "header_clinicas"
}

export enum h1HeaderColors {
    home = "h1_header_home",
    ansiedade = "h1_header_ansiedade",
    tdah = "h1_header_tdah",
    depressao = "h1_header_depressao",
    clinicas = "h1_header_clinicas"
  }

export enum btnColors {
  home = "btn_nav_home",
  ansiedade = "btn_nav_ansiedade",
  tdah = "btn_nav_tdah",
  depressao = "btn_nav_depressao",
  clinicas = "btn_nav_clinicas"
}

export enum textColors {
  home = "text_home",
  ansiedade = "text_ansiedade",
  tdah = "text_tdah",
  depressao = "text_depressao",
  clinicas = "text_clinicas"
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { // INSERIDO POR LAURA {implements OnInit}
  @Input() color: headerColors = headerColors.depressao;

  @Input() h1HeaderColor: h1HeaderColors = h1HeaderColors.depressao;

  @Input() titulo="";

  @Input() btnColor: btnColors = btnColors.depressao;

  @Input() textColor: textColors = textColors.depressao;

   // INSERIDO POR LAURA
   public isLoggedIn: boolean = false;

   constructor(private router: Router, private authService: AuthService) {}
 
   ngOnInit(): void {
     this.isLoggedIn = this.authService.isLoggedIn();
   }
 
   navigateToUserEdit(): void {
     this.router.navigate(['/editar-perfil-usuario']);
   }
 
 
   logout(): void {
     this.authService.logout();
     this.isLoggedIn = false;
     this.router.navigate(['/login']);
   }
   // FIM INSERIDO POR LAURA
}
