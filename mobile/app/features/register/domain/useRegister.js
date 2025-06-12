import { useState } from 'react';
import { registerService } from '../data/registerService';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

export function useRegister() {
  const { setStoredUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function register({ nome, email, senha }) {
    setLoading(true);
    setError(null);
    try {
      const data = await registerService({ nome, email, senha });
      setStoredUser(data.id);
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
