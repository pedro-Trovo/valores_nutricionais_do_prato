import path from 'path';
import { fileURLToPath } from 'url';
import { geminiService } from '../service/geminiService.js';

export const geminiController = {
  // POST
  async analyzeDish(req, res) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    try {
      const dishPhoto = path.join(
        __dirname,
        '../../',
        'assets/example_dish.jpg'
      );

      const foodCaloriesTable = path.join(
        __dirname,
        '../../',
        'assets/tabela_composicao_alimentos.csv'
      );

      const response = await geminiService.analyzeDish(
        dishPhoto,
        foodCaloriesTable
      );

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
