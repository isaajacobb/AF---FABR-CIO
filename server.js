// Carrega variáveis de ambiente do .env
require('dotenv').config();

// Importa as bibliotecas principais
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Conexão com o MongoDB usando a string do .env
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((err) => console.error('Erro na conexão com MongoDB:', err.message));

// MODELO do Mongoose para Movimentação Financeira
const movimentacaoFinanceiraSchema = new mongoose.Schema({
  tipo: { type: String, required: true, enum: ['receita', 'despesa'] }, 
  categoria: { type: String, required: true }, 
  descricao: { type: String }, 
  data: { type: Date, required: true }, 
  valor: { type: Number, required: true, min: 0 }, 
}, { collection: 'MovimentacoesFinanceiras', timestamps: true });

// Cria o modelo baseado no esquema
const MovimentacaoFinanceira = mongoose.model('MovimentacaoFinanceira', movimentacaoFinanceiraSchema);

// ROTA inicial só para testar se a API está rodando
app.get('/', (req, res) => {
  res.json({ msg: 'API de Controle Financeiro rodando!' });
});

// 1. Listar todas movimentações
app.get('/movimentacoes', async (req, res) => {
  const lista = await MovimentacaoFinanceira.find();
  res.json(lista);
});

// 2. Criar uma movimentação
app.post('/movimentacoes', async (req, res) => {
  const mov = await MovimentacaoFinanceira.create(req.body);
  res.status(201).json(mov);
});

// 3. Buscar movimentação por ID
app.get('/movimentacoes/:id', async (req, res) => {
  const mov = await MovimentacaoFinanceira.findById(req.params.id);
  if (!mov) return res.status(404).json({ erro: 'Movimentação não encontrada' });
  res.json(mov);
});

// 4. Atualizar movimentação por ID
app.put('/movimentacoes/:id', async (req, res) => {
  const mov = await MovimentacaoFinanceira.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!mov) return res.status(404).json({ erro: 'Movimentação não encontrada' });
  res.json(mov);
});

// 5. Remover movimentação por ID
app.delete('/movimentacoes/:id', async (req, res) => {
  const mov = await MovimentacaoFinanceira.findByIdAndDelete(req.params.id);
  if (!mov) return res.status(404).json({ erro: 'Movimentação não encontrada' });
  res.json({ ok: true });
});

// Inicia o servidor na porta definida no .env
const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
