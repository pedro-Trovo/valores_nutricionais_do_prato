import { useState } from "react";
import { loginService } from "../data/loginService";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function login({ email, password }) {
    setLoading(true);
    setError(null);
    try {
      const data = await loginService({ email, password });
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
