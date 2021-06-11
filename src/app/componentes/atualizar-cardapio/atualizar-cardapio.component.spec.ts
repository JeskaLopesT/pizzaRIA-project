import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarCardapioComponent } from './atualizar-cardapio.component';

describe('AtualizarCardapioComponent', () => {
  let component: AtualizarCardapioComponent;
  let fixture: ComponentFixture<AtualizarCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
