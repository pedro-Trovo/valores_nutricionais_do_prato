import { useEffect, useState } from 'react';
import {
  getProfileService,
  updateProfileService,
} from '../data/profileService';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';

export function useProfile() {
  const navigation = useNavigation();

  const { storedUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadProfile() {
    try {
      setLoading(true);
      if (storedUser) {
        const profile = await getProfileService(storedUser);
        return profile;
      }
    } catch (err) {
      setError('Erro ao carregar perfil');
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ nome, email, senha, confirmSenha }) {
    if (!storedUser || !nome || !email || !senha || !confirmSenha) return;

    try {
      setLoading(true);
      await updateProfileService({
        id: storedUser,
        nome,
        email,
        senha,
      });
      navigation.navigate('Food');
    } catch (err) {
      setError('Erro ao atualizar perfil');
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { loadProfile, updateProfile, loading, error };
}
