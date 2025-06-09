import path from 'path';
import { fileURLToPath } from 'url';
import { geminiService } from '../service/geminiService.js';
import fs from 'fs';

export const geminiController = {
  // POST
  async analyzeDish(req, res) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    try {
      let dishPhoto = path.join(__dirname, '../../', 'assets/myDish.jpg');

      if (!fs.existsSync(dishPhoto)) {
        // Se não existir com .jpg, tenta com .jpeg
        dishPhoto = path.join(__dirname, '../../', 'assets/myDish.jpeg');

        if (!fs.existsSync(dishPhoto)) {
          throw new Error('Imagem myDish.jpg ou myDish.jpeg não encontrada.');
        }
      }

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
