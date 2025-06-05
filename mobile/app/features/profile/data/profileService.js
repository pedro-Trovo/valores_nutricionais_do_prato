export async function getProfileService(userId) {
  const response = await fetch(`http://localhost:3000/alunos/${userId}`);
  if (!response.ok) throw new Error("Erro ao carregar dados do usuário");
  return response.json();
}

export async function updateProfileService({ id, nome, email }) {
  const response = await fetch(`http://localhost:3000/alunos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email }),
  });

  if (!response.ok) throw new Error("Erro ao atualizar os dados");
  return response.json();
}
