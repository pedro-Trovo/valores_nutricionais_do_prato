import { useState } from 'react';
import { registerService } from '../data/registerService';

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function register({ nome, email, senha }) {
    setLoading(true);
    setError(null);
    try {
      const data = await registerService({ nome, email, senha });
      await AsyncStorage.setItem('user', JSON.stringify(data.aluno));
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { register, loading, error };
}
