export async function registerService({ nome, email, senha }) {
  const response = await fetch("http://localhost:3000/alunos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha }),
  });

  if (!response.ok) {
    throw new Error("Usuário ou senha inválidos");
  }

  return response.json();
}
