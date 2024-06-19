import { Component } from '@angular/core';
import { DashboardAdminComponent } from './../../components/dashboard/dashboard-admin/dashboard-admin.component';
import { SidenavDashboardAdminComponent } from './../../components/dashboard/sidenav-dashboard-admin/sidenav-dashboard-admin.component';
import { HomeDashboardAdminComponent } from './../../components/dashboard/home-dashboard-admin/home-dashboard-admin.component';
import { HeaderDashboardAdminComponent } from './../../components/dashboard/header-dashboard-admin/header-dashboard-admin.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  public dashboardAdminComponent = DashboardAdminComponent;
  public sidenavDashboardAdminComponent = SidenavDashboardAdminComponent;
  public homeDashboardAdminComponent = HomeDashboardAdminComponent;
  public headerDashboardAdminComponent = HeaderDashboardAdminComponent;
  
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

