import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function getDishAnalysis(imagePath, tablePath) {
  const prompts = [
    'Analise a imagem e liste os alimentos da refeição, retornando os dados apenas e unicamente em formato JSON (nada de texto além do JSON), sendo que o JSON deverá conter um array, onde cada campo do array conterá o atributo "alimento" (armazena o nome do alimento, e evite dizer coisas como "tipo 1", "tipo 2" e etc. Diga no máximo o nome do alimento e se ele está cru, cozido, assado, frito, refogado, grelhado e etc) e as "calorias" (armazena as calorias em kcal desse aliemento). Para definir as calorias de cada alimento utilize o PDF e não se esqueça de considerar a porção, visto que na tabela ele mostra as calorias a cada 100 gramas de um determinado alimento, sendo que no prato pode conter mais ou menos que 100 gramas. Caso o alimento não esteja presenta na tabela, use um valor aproximado de calorias. Caso o alimento seja um conjunto de outros alimentos, por exemplo hambúguer de restaurante, salada, sopa e entre outros, utilize um valor aproximado ao invés de pegar um valor baseado na tabela PDF.',

    'Analise a image e liste os macronutrientes (Carboidrato, Proteína, Gordura) da refeição, retornando os dados apenas e unicamente em formato JSON (nada de texto além do JSON), sendo que o JSON deverá conter um array, onde cada campo do array conterá o atributo "macronutriente" (armazena o nome do macronutriente) e as "gramas" (armazena o peso em gramas de cada macronutriente).',

    'Analise a imagem e diga se a refeição é saudável ou não, retornando os dados apenas e unicamente em formato JSON (nada de texto além do JSON), sendo que o JSON deverá conter um array, onde o único campo do array conterá o atributo "ehSaudavel" e o valor dele será um boolean.',
  ];

  const outputs = [];
  const formattedOutput = [];

  const dishPhoto = await ai.files.upload({
    file: imagePath,
    config: { mimeType: 'image/jpeg' },
  });

  const foodCaloriesTable = await ai.files.upload({
    file: tablePath,
    config: { mimeType: 'application/pdf' },
  });

  for (const prompt of prompts) {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: createUserContent([
        createPartFromUri(dishPhoto.uri, dishPhoto.mimeType),
        createPartFromUri(foodCaloriesTable.uri, foodCaloriesTable.mimeType),
        prompt,
      ]),
    });
    outputs.push(
      JSON.parse(
        response.text
          .replace(/^[\s\S]*?```json\s*/, '')
          .replace(/```[\s\S]*$/, '')
      )
    );
  }

  formattedOutput.push({
    alimentos: outputs[0],
    macronutrientes: outputs[1],
    ehSaudavel: outputs[2][0].ehSaudavel,
  });

  return formattedOutput;
}
