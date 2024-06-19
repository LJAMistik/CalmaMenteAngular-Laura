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
  selector: 'app-artigo',
  templateUrl: './artigo-add.component.html',
  styleUrl: './artigo-add.component.css'
})
export class ArtigoAddComponent {
  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;
  public ImgBorderColors = ImgBorderColors;
  public BtnColors = BtnColors;

  artigoForm: FormGroup;

  constructor(
    private router: Router 
  ) {
    this.artigoForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      article: new FormControl('', Validators.required),
      references: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.artigoForm.valid) {
      const formData = this.artigoForm.value;
      console.log(formData);
    } else {
      alert('Formulário inválido. Por favor, corrija os erros e tente novamente.');
    }
  }
}
