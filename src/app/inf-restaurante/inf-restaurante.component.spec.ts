import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfRestauranteComponent } from './inf-restaurante.component';

describe('InfRestauranteComponent', () => {
  let component: InfRestauranteComponent;
  let fixture: ComponentFixture<InfRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfRestauranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
