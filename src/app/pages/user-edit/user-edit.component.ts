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

@Component({
  selector: 'app-edit-profile',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  BtnColors = BtnColors;
  btnColors = btnColors;
  ImgBorderColors = ImgBorderColors;
  h1HeaderColors = h1HeaderColors;
  headerColors = headerColors;
  textColors = textColors;
  footerColors = footerColors;
  readonly = false;  
  user: any = {};
  userProfileForm: FormGroup;
  showModal = false;
  modalMessage = '';

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router 
  ) {
    this.userProfileForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.getUserProfile();
  }

  initForm(): void {
    this.userProfileForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      dataNascimento: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  getUserProfile(): void {
    this.usuarioService.getUserProfile().subscribe(
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
    this.userProfileForm.patchValue({
      nome: this.user.nome,
      dataNascimento: this.user.dataNascimento,
      email: this.user.email
    });
  }

  public editEnable() {
    this.readonly = !this.readonly;
  }

  onSubmit(): void {
    if (this.userProfileForm.valid) {
      const formData = this.userProfileForm.value;
      this.usuarioService.updateUserProfile(formData).subscribe(
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

  salvarDados() {
    // Aqui você pode adicionar a lógica para salvar os dados necessários antes de redirecionar para o login
    console.log('Salvando dados antes de redirecionar para o login...');

    // Exemplo fictício de redirecionamento para a tela de login
    this.router.navigate(['/login']);
  }
}
