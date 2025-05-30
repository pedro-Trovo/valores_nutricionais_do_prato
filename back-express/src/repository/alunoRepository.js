import pool from '../config/db.js';

export const alunoRepository = {
  async create(aluno) {
    const { nome, email, senha } = aluno;
    const [result] = await pool.query(
      'INSERT INTO alunos (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    );
    return { id: result.insertId, nome, email };
  },

  async findAll() {
    const [rows] = await pool.query('SELECT id, nome, email FROM alunos');
    return rows;
  },

  async findById(id) {
    const [rows] = await pool.query(
      'SELECT id, nome, email FROM alunos WHERE id = ?',
      [id]
    );
    return rows[0];
  },

  async findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM alunos WHERE email = ?', [
      email,
    ]);
    return rows[0];
  },

  async update(id, aluno) {
    const { nome, email, senha } = aluno;
    await pool.query(
      'UPDATE alunos SET nome = ?, email = ?, senha = ? WHERE id = ?',
      [nome, email, senha, id]
    );
    return { id, nome, email };
  },

  async delete(id) {
    await pool.query('DELETE FROM alunos WHERE id = ?', [id]);
  },
};
