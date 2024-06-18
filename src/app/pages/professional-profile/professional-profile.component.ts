import { Component, Input } from '@angular/core';
import { BtnColors } from 'src/app/components/btn-pages/btn-pages.component';
import { ImgBorderColors } from 'src/app/components/card-img/card-img.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.css']
})
export class ProfessionalProfileComponent {
  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;
  public ImgBorderColors = ImgBorderColors;
  public BtnColors = BtnColors;

  public professionalProfileForm = new FormGroup ({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    email: new FormControl(''),
    crp: new FormControl(''),
    contato: new FormControl(''),   // INSERIDO POR LAURA
    endereco: new FormControl(''),  // INSERIDO POR LAURA
  })

  @Input() readonly:boolean = true;

  public editEnable() {
    this.readonly = !this.readonly;
  }
}
