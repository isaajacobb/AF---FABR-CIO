import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaMovimentacoesComponent } from './componentes/lista-movimentacoes/lista-movimentacoes';
import { FormularioMovimentacaoComponent } from './componentes/formulario-movimentacao/formulario-movimentacao';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListaMovimentacoesComponent,
    FormularioMovimentacaoComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('controle-financeiro-frontend');
}
