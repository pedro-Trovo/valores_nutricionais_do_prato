import { API_URL_IPV4 } from '@env';

export async function getProfileService(userId) {
  const response = await fetch(`http://${API_URL_IPV4}:3000/alunos/${userId}`);
  if (!response.ok) throw new Error('Erro ao carregar dados do usuário');
  return response.json();
}

export async function updateProfileService({ id, nome, email, senha }) {
  const response = await fetch(`http://${API_URL_IPV4}:3000/alunos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha }),
  });

  if (!response.ok) throw new Error('Erro ao atualizar os dados');
  return response.json();
}
