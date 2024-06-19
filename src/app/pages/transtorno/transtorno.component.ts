// INSERIDO POR LAURA
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BtnColors } from 'src/app/components/btn-pages/btn-pages.component';
import { ImgBorderColors } from 'src/app/components/card-img/card-img.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-transtorno',
  templateUrl: './transtorno.component.html',
  styleUrls: ['./transtorno.component.css']
})
export class TranstornoComponent {
  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;
  public ImgBorderColors = ImgBorderColors;
  public BtnColors = BtnColors;

  transtornoForm: FormGroup;

  constructor(
    private router: Router
  ) {
    this.transtornoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      icon: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.transtornoForm.valid) {
      const formData = this.transtornoForm.value;
      console.log(formData);  // Aqui você pode implementar a lógica para enviar os dados para o backend, por exemplo
    } else {
      alert('Formulário inválido. Por favor, corrija os erros e tente novamente.');
    }
  }
}
