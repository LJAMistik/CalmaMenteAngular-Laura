import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDashboardAdminComponent } from './header-dashboard-admin.component';

describe('HeaderDashboardAdminComponent', () => {
  let component: HeaderDashboardAdminComponent;
  let fixture: ComponentFixture<HeaderDashboardAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDashboardAdminComponent]
    });
    fixture = TestBed.createComponent(HeaderDashboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
