import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDashboardAdminComponent } from './sidenav-dashboard-admin.component';

describe('SidenavDashboardComponent', () => {
  let component: SidenavDashboardAdminComponent;
  let fixture: ComponentFixture<SidenavDashboardAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavDashboardAdminComponent]
    });
    fixture = TestBed.createComponent(SidenavDashboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
