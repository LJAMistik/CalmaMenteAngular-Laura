import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoAddComponent } from './artigo-add.component';

describe('ArtigoComponent', () => {
  let component: ArtigoAddComponent;
  let fixture: ComponentFixture<ArtigoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtigoAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
