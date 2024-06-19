import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalComponent } from './professional.component';
import { HomeDashboardComponent } from '../../components/dashboard/home-dashboard/home-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalComponent,
    children: [
      { path: '', component: HomeDashboardComponent },
      // outras rotas filhas podem ser adicionadas aqui
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule { }
