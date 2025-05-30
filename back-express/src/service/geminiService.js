import { getDishAnalysis } from '../ai/dishAnalysis.js';

export const geminiService = {
  // POST
  async analyzeDish(imagePath, tablePath) {
    const analysis = await getDishAnalysis(imagePath, tablePath);
    return analysis;
  },
};
