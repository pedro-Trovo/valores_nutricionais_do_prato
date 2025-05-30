import { getDishAnalysis } from '../ai/dishAnalysis.js';

export const geminiService = {
  async analyzeDish(imagePath, tablePath) {
    const analysis = await getDishAnalysis(imagePath, tablePath);
    return analysis;
  },
};
