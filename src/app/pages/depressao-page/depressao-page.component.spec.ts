import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepressaoPageComponent } from './depressao-page.component';

describe('DepressaoPageComponent', () => {
  let component: DepressaoPageComponent;
  let fixture: ComponentFixture<DepressaoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepressaoPageComponent]
    });
    fixture = TestBed.createComponent(DepressaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
