import AppText from 'design-system/components/AppText';
import TextInput from 'design-system/components/TextInput';
import Button from 'design-system/components/Button';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import sizes from 'design-system/tokens/sizes';
import colors from 'design-system/tokens/colors';
import spacing from 'design-system/tokens/spacing';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useProfile } from '../domain/useProfile';

export default function ProfileScreen() {
  const [user, setUser] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmSenha, setShowConfirmSenha] = useState(false);

  const { loadProfile, updateProfile } = useProfile();

  useEffect(() => {
    const getUser = async () => {
      const loadedUser = await loadProfile();
      setNome(loadedUser.nome);
      setEmail(loadedUser.email);

      setUser(loadedUser);
    };

    getUser();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={{ alignItems: 'center', marginBottom: 30 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Food')}>
                <Image
                  style={styles.logo}
                  source={require('./../../../../assets/logo.png')}
                  resizeMode="contain"
                ></Image>
              </TouchableOpacity>
            </View>

            <AppText
              weight="bold"
              fontSize={sizes.lg}
              color={colors.darkerGray}
              style={styles.profileTitle}
            >
              Meu Perfil
            </AppText>

            {user && (
              <View>
                <View style={styles.inputSpacing}>
                  <TextInput
                    label="Nome"
                    placeholder="Insira seu nome"
                    value={nome}
                    onChangeText={setNome}
                    keyboardType="email-address"
                  />
                </View>

                <View style={styles.inputSpacing}>
                  <TextInput
                    label="E-mail"
                    placeholder="example@email.com"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                  />
                </View>

                <View style={styles.inputSpacing}>
                  <TextInput
                    label="Senha"
                    placeholder="Insira sua senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={!showPassword}
                    hideInput={true}
                    onHideInputToggle={() => setShowPassword(!showPassword)}
                  />
                </View>
                <View style={styles.inputSpacing}>
                  <TextInput
                    label="Confirmar Senha"
                    placeholder="Insira sua senha novamente"
                    value={confirmSenha}
                    onChangeText={setConfirmSenha}
                    secureTextEntry={!showConfirmSenha}
                    hideInput={true}
                    onHideInputToggle={() =>
                      setShowConfirmSenha(!showConfirmSenha)
                    }
                  />
                </View>
              </View>
            )}

            <Button
              title="Entrar"
              onPress={() =>
                updateProfile({ nome, email, senha, confirmSenha })
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  profileTitle: {
    marginBottom: spacing.lg,
  },
  inputSpacing: {
    marginTop: spacing.md,
  },
  content: {
    width: '100%',
    paddingHorizontal: spacing.md,
  },
});
