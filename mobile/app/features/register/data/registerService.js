import { API_URL_IPV4 } from '@env';

export async function registerService({ nome, email, senha }) {
  const response = await fetch(`http://${API_URL_IPV4}:3000/alunos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha }),
  });

  if (!response.ok) {
    throw new Error('Usuário ou senha inválidos');
  }

  return response.json();
}
