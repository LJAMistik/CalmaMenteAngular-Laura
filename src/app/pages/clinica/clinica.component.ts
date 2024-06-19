import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BtnColors } from 'src/app/components/btn-pages/btn-pages.component';
import { ImgBorderColors } from 'src/app/components/card-img/card-img.component';
import { h2Colors } from 'src/app/components/card-info/card-info.component';
import { footerColors } from 'src/app/components/footer/footer.component';
import { btnColors, h1HeaderColors, headerColors, textColors } from 'src/app/components/header/header.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// interface Clinica {
//   nome: string;
//   email: string;
//   data_cadastro: string;
//   telefone: string;
//   classificacao: number;
//   especialidades: string[];
//   endereco: {
//     logradouro: string;
//     complemento: string;
//     bairro: string;
//     cidade: string;
//     uf: string;
//     cep: string;
//     coordinates: number[];
//   };
// }

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent {
  public headerColors = headerColors;
  public btnColors = btnColors;
  public textColors = textColors;
  public footerColors = footerColors;
  public h2Colors = h2Colors;
  public h1HeaderColors = h1HeaderColors;
  public ImgBorderColors = ImgBorderColors;
  public BtnColors = BtnColors;

  constructor(private http: HttpClient) {}

  public registerClinicForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    address: new FormGroup ({
      zipCode: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      neighborhood: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      complement: new FormControl('', Validators.required),
    })
  })

  buscarClinica() {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token não encontrado');
      alert('Token não encontrado. Faça login novamente.');
      return;
    }

  }
  //   const termoBusca = (document.getElementById('buscar-clinica') as HTMLInputElement).value;

  //   this.http.get<Clinica[]>(`/api/clinicas/nome/${termoBusca}`, {
  //     headers: {
  //       'access-token': token
  //     }
  //   })
  //   .subscribe(
  //     data => this.exibirResultadosClinicas(data),
  //     error => this.handleError(error)
  //   );
  // }

  // private handleError(error: any) {
  //   console.error('Erro ao buscar clínicas:', error);
  //   const resultadoClinica = document.getElementById('resultado-clinica');
  //   if (resultadoClinica) {
  //     resultadoClinica.innerHTML = '<p>Ocorreu um erro ao buscar as clínicas. Tente novamente mais tarde.</p>';
  //   }
  // }

  // exibirResultadosClinicas(resultados: Clinica[]) {
  //   const divResultado = document.getElementById('resultado-clinica');
  //   if (!divResultado) return;

  //   divResultado.innerHTML = ''; // Limpa quaisquer resultados anteriores

  //   if (!Array.isArray(resultados) || resultados.length === 0) {
  //     divResultado.innerHTML = '<p>Nenhuma clínica encontrada.</p>';
  //     return;
  //   }

  //   const listaClinicas = document.createElement('ul');
  //   resultados.forEach(clinica => {
  //     const itemClinica = document.createElement('li');
  //     itemClinica.textContent = `${clinica.nome} - ${clinica.endereco.cidade}, ${clinica.endereco.uf}`;
  //     itemClinica.addEventListener('click', () => {
  //       this.limparDetalhesClinica();
  //       this.exibirDetalhesClinica(clinica);
  //     });
  //     listaClinicas.appendChild(itemClinica);
  //   });
  //   divResultado.appendChild(listaClinicas);
  // }

  // exibirDetalhesClinica(clinica: Clinica) {
  //   const divDetalhes = document.getElementById('detalhes-clinica');
  //   if (!divDetalhes) return;

  //   divDetalhes.innerHTML = `
  //     <h2>Detalhes da Clínica</h2>
  //     <p><strong>Nome:</strong> ${clinica.nome}</p>
  //     <p><strong>Email:</strong> ${clinica.email}</p>
  //     <p><strong>Data de Cadastro:</strong> ${new Date(clinica.data_cadastro).toLocaleDateString()}</p>
  //     <p><strong>Telefone:</strong> ${clinica.telefone}</p>
  //     <p><strong>Classificação:</strong> ${clinica.classificacao}</p>
  //     <p><strong>Especialidades:</strong> ${clinica.especialidades.join(', ')}</p>
  //     <h5>Endereço</h5>
  //     <p><strong>Logradouro:</strong> ${clinica.endereco.logradouro}</p>
  //     <p><strong>Complemento:</strong> ${clinica.endereco.complemento}</p>
  //     <p><strong>Bairro:</strong> ${clinica.endereco.bairro}</p>
  //     <p><strong>Cidade:</strong> ${clinica.endereco.cidade}</p>
  //     <p><strong>UF:</strong> ${clinica.endereco.uf}</p>
  //     <p><strong>CEP:</strong> ${clinica.endereco.cep}</p>
  //     <p><strong>Coordenadas:</strong> ${clinica.endereco.coordinates.join(', ')}</p>
  //   `;
  // }

  // limparDetalhesClinica() {
  //   const divDetalhes = document.getElementById('detalhes-clinica');
  //   if (divDetalhes) {
  //     divDetalhes.innerHTML = '';
  //   }
  // }
  // }
}
