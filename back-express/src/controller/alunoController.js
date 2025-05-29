const alunoService = require('../service/alunoService');

const alunoController = {
  async getAll(req, res) {
    try {
      const alunos = await alunoService.listarAlunos();
      res.json(alunos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const aluno = await alunoService.buscarPorId(req.params.id);
      if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
      res.json(aluno);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async create(req, res) {
    try {
      const alunoCriado = await alunoService.criarAluno(req.body);
      res.status(201).json(alunoCriado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const alunoAtualizado = await alunoService.atualizarAluno(req.params.id, req.body);
      res.json(alunoAtualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      await alunoService.deletarAluno(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
      }

      const aluno = await alunoService.logar(email, senha);

      if (!aluno) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      res.status(200).json({ message: 'Login realizado com sucesso', aluno });
    } 
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = alunoController;
