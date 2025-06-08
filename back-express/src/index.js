import express from 'express';
import cors from 'cors';
import alunoRoutes from './routes/alunoRoutes.js';
import geminiRoutes from './routes/geminiRoutes.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Rotas
app.use('/alunos', alunoRoutes);
app.use('/gemini', geminiRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
