import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMovimentacoesComponent } from './lista-movimentacoes';

describe('ListaMovimentacoes', () => {
  let component: ListaMovimentacoesComponent;
  let fixture: ComponentFixture<ListaMovimentacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMovimentacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMovimentacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
