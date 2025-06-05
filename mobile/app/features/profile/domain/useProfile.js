import { useEffect, useState } from "react";
import { getProfileService, updateProfileService } from "../data/profileService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true);
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          const parsed = JSON.parse(storedUser);
          const profile = await getProfileService(parsed.id);
          setUser(profile);
        }
      } catch (err) {
        setError("Erro ao carregar perfil");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  async function updateProfile({ nome, email }) {
    if (!user) return;

    try {
      setLoading(true);
      const updated = await updateProfileService({ id: user.id, nome, email });

      
      setUser(updated);
      await AsyncStorage.setItem("user", JSON.stringify(updated));

      return updated;
    } catch (err) {
      setError("Erro ao atualizar perfil");
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { user, updateProfile, loading, error };
}
