import { h1HeaderColors } from './../../components/header/header.component';
import { Component } from '@angular/core';
import { footerColors } from 'src/app/components/footer/footer.component';
import { headerColors, btnColors, textColors } from 'src/app/components/header/header.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { DisorderResponse } from 'src/app/types';
import { HttpClient } from '@angular/common/http';
import { TranstornoService } from 'src/app/services/transtorno-service.service';

@Component({
  selector: 'app-ansiedade-page',
  templateUrl: './ansiedade-page.component.html',
  styleUrls: ['./ansiedade-page.component.css']
})
export class AnsiedadePageComponent {

  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;
  public apiResponse?: DisorderResponse;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getTranstornos()
  }

  async getTranstornos() {
    const service = new TranstornoService(this.httpClient);

    service.getTranstorno(1).subscribe(
      data => this.apiResponse = data
    );
    
  }
}
