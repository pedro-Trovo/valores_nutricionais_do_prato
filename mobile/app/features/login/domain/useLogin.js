import { useState } from "react";
import { loginService } from "../data/loginService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function login({ email, senha }) {
    setLoading(true);
    setError(null);
    try {
      const data = await loginService({ email, senha });
      await AsyncStorage.setItem("user", JSON.stringify(data.aluno));
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
