import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventoComponent } from './card-evento.component';

describe('CardEventoComponent', () => {
  let component: CardEventoComponent;
  let fixture: ComponentFixture<CardEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEventoComponent]
    });
    fixture = TestBed.createComponent(CardEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
