import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashboardAdminComponent } from './home-dashboard-admin.component';

describe('HomeDashboardComponent', () => {
  let component: HomeDashboardAdminComponent;
  let fixture: ComponentFixture<HomeDashboardAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDashboardAdminComponent]
    });
    fixture = TestBed.createComponent(HomeDashboardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
