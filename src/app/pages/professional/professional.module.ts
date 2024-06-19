import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { DashboardComponent } from '../../components/dashboard/dashboard/dashboard.component';
import { SidenavDashboardComponent } from '../../components/dashboard/sidenav-dashboard/sidenav-dashboard.component';
import { HomeDashboardComponent } from '../../components/dashboard/home-dashboard/home-dashboard.component';
import { HeaderDashboardComponent } from '../../components/dashboard/header-dashboard/header-dashboard.component';
// Imports do Material
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
    ProfessionalComponent,
    DashboardComponent,
    SidenavDashboardComponent,
    HomeDashboardComponent,
    HeaderDashboardComponent
  ],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    //Imports do Material
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule
  ]
})
export class ProfessionalModule { }
