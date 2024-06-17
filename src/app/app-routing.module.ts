import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepressaoPageComponent } from './pages/depressao-page/depressao-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AnsiedadePageComponent } from './pages/ansiedade-page/ansiedade-page.component';
import { TdahPageComponent } from './pages/tdah-page/tdah-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfessionalProfileComponent } from './pages/professional-profile/professional-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ClinicasPageComponent } from './pages/clinicas-page/clinicas-page.component';
import { PasswordPageComponent } from './pages/password-page/password-page.component';
import { PanicPageComponent } from './pages/panic-page/panic-page.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component'; // INSERIDO POR LAURA

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'ansiedade', component: AnsiedadePageComponent},
  {path: 'depressao', component: DepressaoPageComponent},
  {path: 'tdah', component: TdahPageComponent},
  {path: 'login', component:LoginPageComponent},
  {path: 'cadastro', component:RegisterPageComponent},
  {path: 'perfil-usuario', component:UserProfileComponent},
  {path: 'perfil-profissional', component:ProfessionalProfileComponent},
  {path: 'clinicas', component:ClinicasPageComponent},
  {path: 'password', component:PasswordPageComponent},
  {path: 'panic', component:PanicPageComponent},
  {path: 'editar-usuario', component:  UserEditComponent }, // INSERIDO POR LAURA


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
