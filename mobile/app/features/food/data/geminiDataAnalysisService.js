export async function geminiDataAnalysisService(imageUri, mimeType) {
  const filename = imageUri.split('/').pop();

  const formData = new FormData();
  formData.append('foodImage', {
    uri: imageUri,
    name: filename,
    type: mimeType,
  });

  const response = await fetch('http://192.168.0.195:3000/gemini/analyze', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar a imagem');
  }

  return await response.json();
}
