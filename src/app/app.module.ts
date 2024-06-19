import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AnsiedadePageComponent } from './pages/ansiedade-page/ansiedade-page.component';
import { ArtigoComponent } from './components/card-article/card-article.component';
import { ModalInfoComponent } from './components/card-info/card-info.component';
import { PanicBtnComponent } from './components/panic-btn/panic-btn.component';
import { TdahPageComponent } from './pages/tdah-page/tdah-page.component';
import { DepressaoPageComponent } from './pages/depressao-page/depressao-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CardImgComponent } from './components/card-img/card-img.component';
import { InputComponent } from './components/input/input.component';
import { LinksComponent } from './components/links/links.component';
import { BtnPagesComponent } from './components/btn-pages/btn-pages.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalFeedbackComponent } from './components/modal-feedback/modal-feedback.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProfessionalProfileComponent } from './pages/professional-profile/professional-profile.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ClinicasPageComponent } from './pages/clinicas-page/clinicas-page.component';
import { PasswordPageComponent } from './pages/password-page/password-page.component';
import { PanicPageComponent } from './pages/panic-page/panic-page.component';
// INSERIDO POR LAURA
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { AuthService } from './services/auth.service'; 
import { RouterModule } from '@angular/router'; 
import { ProfessionalEditComponent } from './pages/professional-edit/professional-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EventoComponent } from './pages/evento/evento.component';
import { ClinicaComponent } from './pages/clinica/clinica.component';
import { TranstornoComponent } from './pages/transtorno/transtorno.component';
import { ArtigoComponent } from './pages/artigo/artigo.component';


//Imports do Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({ 

    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        CardComponent,
        AnsiedadePageComponent,
        ArtigoComponent,
        ModalInfoComponent,
        PanicBtnComponent,
        TdahPageComponent,
        DepressaoPageComponent,
        ModalComponent,
        LoginPageComponent,
        RegisterPageComponent,
        CardImgComponent,
        InputComponent,
        LinksComponent,
        BtnPagesComponent,
        InputCheckboxComponent,
        ModalFeedbackComponent,
        UserProfileComponent,
        ProfessionalProfileComponent,
        ClinicasPageComponent,
        PasswordPageComponent,
        PanicPageComponent,
        // INSERIDO POR LAURA
        UserEditComponent, 
        ProfessionalEditComponent, 
        EventoComponent, ClinicaComponent, TranstornoComponent,
        ArtigoComponent,
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        // INSERIDO POR LAURA
        RouterModule,
        BrowserAnimationsModule,
        // Imports do Angular Material
        MatCardModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        MatMenuModule,
        MatSidenavModule
    ], 
    
    providers: [
        AuthService, 
        provideHttpClient(withInterceptorsFromDi()), 
        provideAnimationsAsync()
    ],

    bootstrap: [
        AppComponent]
}) 

export class AppModule { }
