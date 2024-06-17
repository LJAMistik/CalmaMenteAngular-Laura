import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicasPageComponent } from './clinicas-page.component';

describe('ClinicasPageComponent', () => {
  let component: ClinicasPageComponent;
  let fixture: ComponentFixture<ClinicasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicasPageComponent]
    });
    fixture = TestBed.createComponent(ClinicasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
