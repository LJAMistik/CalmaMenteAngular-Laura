 // INSERIDO POR LAURA
 import { Component, OnInit } from '@angular/core';
 import { UsuarioService } from '../../services/usuario.service';
 import { BtnColors } from 'src/app/components/btn-pages/btn-pages.component';
 import { ImgBorderColors } from 'src/app/components/card-img/card-img.component';
 import { h2Colors } from 'src/app/components/card-info/card-info.component';
 import { footerColors } from 'src/app/components/footer/footer.component';
 import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';
 import { FormGroup, FormControl, Validators } from '@angular/forms';
 import { Router } from '@angular/router';
 import { AuthService } from 'src/app/services/auth.service'; 
 import { ModalFeedbackComponent } from 'src/app/components/modal-feedback/modal-feedback.component';

@Component({
  selector: 'app-professional-edit',
  templateUrl: './professional-edit.component.html',
  styleUrls: ['./professional-edit.component.css']
})
export class ProfessionalEditComponent implements OnInit{
  BtnColors = BtnColors;
  btnColors = btnColors;
  ImgBorderColors = ImgBorderColors;
  h1HeaderColors = h1HeaderColors;
  headerColors = headerColors;
  textColors = textColors;
  footerColors = footerColors;
  readonly = false;  
  user: any = {};
  professionalProfileForm: FormGroup;
  showModal = false;
  modalMessage = '';


constructor(
  private authService: AuthService,
  private usuarioService: UsuarioService,
  private router: Router 
) {
  this.professionalProfileForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', [Validators.required, Validators.email]),
    email: new FormControl('', [Validators.required, Validators.email]),
    crp: new FormControl('', [Validators.required, Validators.email]),    
    contato: new FormControl('', [Validators.required, Validators.email]),   
    endereco: new FormControl('',[Validators.required, Validators.email]),
  });
}

get getForm(): FormGroup {
  return this.professionalProfileForm;
}

ngOnInit(): void {
  this.initForm();
  this.getProfessionalProfile();
}

initForm(): void {
  this.professionalProfileForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
}

 getProfessionalProfile(): void {
   this.usuarioService.getProfessionalProfile().subscribe(
     (data: any) => {
       this.user = data;
       this.patchForm();
     },
     (error: any) => {
       console.error('Erro ao buscar perfil do usuário', error);
     }
   );
 }

 patchForm(): void {
  this.professionalProfileForm.patchValue({
    nome: this.user.nome,
    dataNascimento: this.user.dataNascimento,
    email: this.user.email
  });
}

public editEnable() {
  this.readonly = !this.readonly;
}

 onSubmit(): void {
  if (this.professionalProfileForm.valid) {
    const formData = this.professionalProfileForm.value;
    this.usuarioService.updateProfessionalProfile(formData).subscribe(
      (response: any) => {
        this.showModal = true;
        this.modalMessage = 'Perfil atualizado com sucesso!';
      },
      (error: any) => {
        console.error('Erro ao atualizar perfil', error);
        this.showModal = true;
        this.modalMessage = 'Erro ao atualizar perfil. Por favor, tente novamente.';
      }
    );
  } else {
    alert('Formulário inválido. Por favor, corrija os erros e tente novamente.')
  }
}
}