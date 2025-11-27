import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MovimentacaoFinanceira {
  _id?: string;
  tipo: 'receita' | 'despesa';
  categoria: string;
  descricao?: string;
  data: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoFinanceiraService {
  private apiUrl = 'http://localhost:3000/movimentacoes';

  constructor(private http: HttpClient) {}

  listar(): Observable<MovimentacaoFinanceira[]> {
    return this.http.get<MovimentacaoFinanceira[]>(this.apiUrl);
  }

  criar(mov: MovimentacaoFinanceira): Observable<MovimentacaoFinanceira> {
    return this.http.post<MovimentacaoFinanceira>(this.apiUrl, mov);
  }

  atualizar(id: string, mov: Partial<MovimentacaoFinanceira>): Observable<MovimentacaoFinanceira> {
    return this.http.put<MovimentacaoFinanceira>(`${this.apiUrl}/${id}`, mov);
  }

  excluir(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
