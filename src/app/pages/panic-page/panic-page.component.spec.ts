import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicPageComponent } from './panic-page.component';

describe('PanicPageComponent', () => {
  let component: PanicPageComponent;
  let fixture: ComponentFixture<PanicPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanicPageComponent]
    });
    fixture = TestBed.createComponent(PanicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
