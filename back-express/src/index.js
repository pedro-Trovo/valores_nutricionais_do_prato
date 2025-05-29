const express = require('express');
const app = express();
const alunoRoutes = require('./routes/alunoRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/alunos', alunoRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
