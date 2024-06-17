import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPagesComponent } from './btn-pages.component';

describe('BtnPagesComponent', () => {
  let component: BtnPagesComponent;
  let fixture: ComponentFixture<BtnPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnPagesComponent]
    });
    fixture = TestBed.createComponent(BtnPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
