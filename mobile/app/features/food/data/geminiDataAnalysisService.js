import { API_URL_IPV4 } from '@env';

export async function geminiDataAnalysisService(imageUri, mimeType) {
  const filename = imageUri.split('/').pop();

  const formData = new FormData();
  formData.append('foodImage', {
    uri: imageUri,
    name: filename,
    type: mimeType,
  });

  const response = await fetch(`http://${API_URL_IPV4}:3000/gemini/analyze`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar a imagem');
  }

  return await response.json();
}
