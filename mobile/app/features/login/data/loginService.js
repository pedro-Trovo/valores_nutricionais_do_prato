export async function loginService({ email, senha }) {
  const response = await fetch('http://localhost:3000/alunos/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
  });

  if (!response.ok) {
    throw new Error('Usuário ou senha inválidos');
  }

  return response.json();
}
