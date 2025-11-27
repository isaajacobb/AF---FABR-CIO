import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { MovimentacaoFinanceira, MovimentacaoFinanceiraService } from '../../servicos/movimentacao-financeira';


@Component({
  selector: 'app-lista-movimentacoes',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: './lista-movimentacoes.html',
  styleUrls: ['./lista-movimentacoes.css']
})
export class ListaMovimentacoesComponent implements OnInit {
  movimentacoes: MovimentacaoFinanceira[] = [];

  totalReceitas = 0;
  totalDespesas = 0;
  saldo = 0;

  constructor(private movService: MovimentacaoFinanceiraService) {}

  ngOnInit(): void {
    this.carregarMovimentacoes();
  }

  carregarMovimentacoes() {
  this.movService.listar().subscribe((dados) => {
    this.movimentacoes = dados;
    this.calcularTotais();
  });
}

calcularTotais() {
  this.totalReceitas = 0;
  this.totalDespesas = 0;

  for (const mov of this.movimentacoes) {
    if (mov.tipo === 'receita') {
      this.totalReceitas += mov.valor;
    } else if (mov.tipo === 'despesa') {
      this.totalDespesas += mov.valor;
    }
  }

  this.saldo = this.totalReceitas - this.totalDespesas;
}

  excluir(id: string) {
    if (!confirm('Tem certeza que deseja excluir esta movimentação?')) {
      return;
    }

    this.movService.excluir(id).subscribe(() => {
      this.movimentacoes = this.movimentacoes.filter(m => m._id !== id);
    });

    this.calcularTotais();
  }
}


