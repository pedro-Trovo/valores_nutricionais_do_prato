import AppText from 'design-system/components/AppText';
import TextInput from 'design-system/components/TextInput';
import Button from 'design-system/components/Button';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import sizes from 'design-system/tokens/sizes';
import colors from 'design-system/tokens/colors';
import spacing from 'design-system/tokens/spacing';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useRegister } from '../../domain/useRegister';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmSenha, setShowConfirmSenha] = useState(false);

  const { register, loading, error } = useRegister();

  const handleCadastro = async () => {
    const result = await register({ nome, email, senha });

    if (result) {
      navigation.navigate('Food');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={{ alignItems: 'center', marginBottom: 30 }}>
              <Image
                style={styles.logo}
                source={require('./../../../../../assets/logo.png')}
                resizeMode="contain"
              ></Image>
            </View>

            <AppText
              weight="bold"
              fontSize={sizes.lg}
              color={colors.darkerGray}
              style={styles.registerTitle}
            >
              Cadastro
            </AppText>

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
                onHideInputToggle={() => setShowConfirmSenha(!showConfirmSenha)}
              />
            </View>

            <Button
              title="Cadastrar"
              onPress={handleCadastro}
              loading={loading}
            />
            <View style={styles.loginContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AppText fontSize={sizes.sm} color={colors.darkerGray}>
                  Já possui conta?
                </AppText>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={{ marginLeft: 4 }}
                >
                  <AppText
                    fontSize={sizes.sm}
                    color={colors.primary}
                    weight="bold"
                    style={styles.loginLink}
                  >
                    Faça login
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>
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
  registerTitle: {
    marginBottom: spacing.lg,
  },
  inputSpacing: {
    marginTop: spacing.md,
  },
  content: {
    width: '100%',
    paddingHorizontal: spacing.md,
  },
  loginContainer: {
    marginTop: spacing.lg,
    alignItems: 'center',
  },
  loginLink: {
    textDecorationLine: 'underline',
  },
});
