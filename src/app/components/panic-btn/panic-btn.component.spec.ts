import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanicBtnComponent } from './panic-btn.component';

describe('PanicBtnComponent', () => {
  let component: PanicBtnComponent;
  let fixture: ComponentFixture<PanicBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanicBtnComponent]
    });
    fixture = TestBed.createComponent(PanicBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
