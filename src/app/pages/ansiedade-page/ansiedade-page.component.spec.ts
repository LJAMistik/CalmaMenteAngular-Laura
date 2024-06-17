import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsiedadePageComponent } from './ansiedade-page.component';

describe('AnsiedadePageComponent', () => {
  let component: AnsiedadePageComponent;
  let fixture: ComponentFixture<AnsiedadePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnsiedadePageComponent]
    });
    fixture = TestBed.createComponent(AnsiedadePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
