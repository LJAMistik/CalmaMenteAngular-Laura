import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstornoComponent } from './transtorno.component';

describe('TranstornoComponent', () => {
  let component: TranstornoComponent;
  let fixture: ComponentFixture<TranstornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranstornoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranstornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
