import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovimentacaoFinanceira, MovimentacaoFinanceiraService } from '../../servicos/movimentacao-financeira';

@Component({
  selector: 'app-formulario-movimentacao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-movimentacao.html',
  styleUrls: ['./formulario-movimentacao.css']
})

export class FormularioMovimentacaoComponent {
  movimentacao: MovimentacaoFinanceira = {
    tipo: 'receita',
    categoria: '',
    descricao: '',
    data: '',
    valor: 0
  };

  constructor(private movService: MovimentacaoFinanceiraService) {}

  salvar() {
    this.movService.criar(this.movimentacao).subscribe(() => {
      this.movimentacao = {
        tipo: 'receita',
        categoria: '',
        descricao: '',
        data: '',
        valor: 0
      };
    });
  }
}
