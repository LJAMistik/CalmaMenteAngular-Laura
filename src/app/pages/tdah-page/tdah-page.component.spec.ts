import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdahPageComponent } from './tdah-page.component';

describe('TdahPageComponent', () => {
  let component: TdahPageComponent;
  let fixture: ComponentFixture<TdahPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdahPageComponent]
    });
    fixture = TestBed.createComponent(TdahPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
