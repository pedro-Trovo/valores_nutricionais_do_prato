import express from 'express';
import alunoRoutes from './routes/alunoRoutes.js';
import geminiRoutes from './routes/geminiRoutes.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/alunos', alunoRoutes);
app.use('/gemini', geminiRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
