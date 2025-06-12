import { useState } from 'react';
import { loginService } from '../data/loginService';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

export function useLogin() {
  const { setStoredUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function login({ email, senha }) {
    setLoading(true);
    setError(null);
    try {
      const data = await loginService({ email, senha });
      setStoredUser(data.aluno.id);
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { login, loading, error };
}
