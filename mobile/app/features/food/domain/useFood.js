import { useState } from 'react';
import { geminiDataAnalysisService } from '../data/geminiDataAnalysisService';

export function useFood() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getGeminiDataAnalysis(imageUri, mimeType) {
    setLoading(true);
    setError(null);
    try {
      const data = await geminiDataAnalysisService(imageUri, mimeType);
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { getGeminiDataAnalysis, loading, error };
}
