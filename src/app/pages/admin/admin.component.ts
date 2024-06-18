import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './../../components/dashboard/dashboard/dashboard.component';
import { SidenavDashboardComponent } from './../../components/dashboard/sidenav-dashboard/sidenav-dashboard.component';
import { HomeDashboardComponent } from './../../components/dashboard/home-dashboard/home-dashboard.component';
import { HeaderDashboardComponent } from './../../components/dashboard/header-dashboard/header-dashboard.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  public dashboardComponent = DashboardComponent;
  public sidenavDashboardComponent = SidenavDashboardComponent;
  public homeDashboardComponent = HomeDashboardComponent;
  public headerDashboardComponent = HeaderDashboardComponent;
  
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

