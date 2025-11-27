import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMovimentacaoComponent } from './formulario-movimentacao';

describe('FormularioMovimentacao', () => {
  let component: FormularioMovimentacaoComponent;
  let fixture: ComponentFixture<FormularioMovimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMovimentacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
