import bcrypt from 'bcrypt';
import { alunoRepository } from '../repository/alunoRepository.js';

export const alunoService = {
  // POST
  async criarAluno(aluno) {
    const existente = await alunoRepository.findByEmail(aluno.email);
    if (existente) {
      throw new Error('Email já cadastrado');
    }

    const saltRounds = 10;
    const hash = await bcrypt.hash(aluno.senha, saltRounds);
    aluno.senha = hash;

    return alunoRepository.create(aluno);
  },

  async logar(email, senha) {
    const aluno = await alunoRepository.findByEmail(email);
    if (!aluno) {
      return null;
    }
    const senhaCorreta = await bcrypt.compare(senha, aluno.senha);
    if (!senhaCorreta) {
      return null;
    }
    delete aluno.senha;
    return aluno;
  },

  // GET
  async listarAlunos() {
    return alunoRepository.findAll();
  },

  async buscarPorId(id) {
    return alunoRepository.findById(id);
  },

  // UPDATE
  async atualizarAluno(id, aluno) {
    const existente = await alunoRepository.findById(id);

    if (!existente) {
      return null;
    }

    if (aluno.senha) {
      const saltRounds = 10;
      aluno.senha = await bcrypt.hash(aluno.senha, saltRounds);
    }

    return alunoRepository.update(id, aluno);
  },

  // DELETE
  async deletarAluno(id) {
    return alunoRepository.delete(id);
  },
};
