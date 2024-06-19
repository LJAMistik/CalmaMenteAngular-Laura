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
// INSERIDO POR LAURA
import { ProfessionalEditComponent } from './pages/professional-edit/professional-edit.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { EventoComponent } from './pages/evento/evento.component';
import { ClinicaComponent } from './pages/clinica/clinica.component';
import { TranstornoComponent } from './pages/transtorno/transtorno.component';
import { ArtigoComponent } from './pages/artigo/artigo.component';

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
  // INSERIDO POR LAURA// INSERIDO POR LAURA
  {path: 'editar-usuario', component:UserEditComponent},
  {path: 'editar-profissional', component:ProfessionalEditComponent},
  {path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)},
  {path: 'painel', loadChildren: () => import('./pages/professional/professional.module').then(m => m.ProfessionalModule)},
  {path: 'evento', component:EventoComponent},
  {path: 'clinica', component:ClinicaComponent},
  {path: 'transtorno', component:TranstornoComponent},
  {path: 'artigo', component:ArtigoComponent},

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
