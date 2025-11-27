import { TestBed } from '@angular/core/testing';

import { MovimentacaoFinanceira } from './movimentacao-financeira';

describe('MovimentacaoFinanceira', () => {
  let service: MovimentacaoFinanceira;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentacaoFinanceira);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
