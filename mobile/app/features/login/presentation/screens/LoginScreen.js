import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextInput from 'design-system/components/TextInput';
import Button from 'design-system/components/Button';
import Header from 'design-system/components/Header';
import spacing from 'design-system/tokens/spacing';
import AppText from 'design-system/components/AppText';
import sizes from 'design-system/tokens/sizes';
import colors from 'design-system/tokens/colors';
import { useNavigation } from '@react-navigation/native';
import { useLogin } from '../../domain/useLogin';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { login, loading, error } = useLogin();

  const handleLogin = async () => {
    const result = await login({ email, senha });
    if (result) {
      // Navegar para a tela principal após o login bem-sucedido
      console.log('Login bem-sucedido:', result);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        showHelp={true}
        onHelp={() => {
          alert('Ajuda!');
        }}
        showBack={false}
      />
      <View style={styles.content}>
        {/* Ícone do logo */}
        <MaterialCommunityIcons
          name="food-apple"
          size={64}
          style={styles.logo}
        />

        <AppText
          weight="bold"
          fontSize={sizes.lg}
          color={colors.darkerGray}
          style={styles.loginTitle}
        >
          Login
        </AppText>

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
            secureTextEntry={true}
            hideInput={showPassword}
            onHideInputToggle={() => setShowPassword(!showPassword)}
          />
        </View>

        <Button title="Entrar" onPress={handleLogin} loading={loading} />

        <View style={styles.registerContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AppText fontSize={sizes.sm} color={colors.darkerGray}>
              Não tem uma conta?
            </AppText>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}
              style={{ marginLeft: 4 }}
            >
              <AppText
                fontSize={sizes.sm}
                color={colors.primary}
                weight="bold"
                style={styles.registerLink}
              >
                Cadastre-se
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.white,
  },
  logo: {
    marginBottom: spacing.lg,
    alignSelf: 'center',
  },
  loginTitle: {
    marginBottom: spacing.lg,
  },
  inputSpacing: {
    marginTop: spacing.md,
  },
  content: {
    width: '100%',
    paddingHorizontal: spacing.md,
  },
  registerContainer: {
    marginTop: spacing.lg,
    alignItems: 'center',
  },
  registerLink: {
    textDecorationLine: 'underline',
  },
});
