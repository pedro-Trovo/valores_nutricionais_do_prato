import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import AppText from 'design-system/components/AppText';
import spacing from '../tokens/spacing';
import { useNavigation } from '@react-navigation/native';
import DetailsIcon from '../svgs/DetailsIcon';
import UserIcon from '../svgs/UserIcon';
import { useContext } from 'react';
import { UserContext } from './../../../app/contexts/UserContext';

export default function HeaderTwo() {
  const navigation = useNavigation();
  const { setStoredUser } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Food')}
      >
        <Image
          style={styles.logo}
          source={require('./../../../assets/logo.png')}
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>

      {/* <View style={styles.subcontainer}>
        <TouchableOpacity activeOpacity={0.5}>
          <DetailsIcon />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <UserIcon />
        </TouchableOpacity>
      </View> */}

      <View style={styles.subcontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          activeOpacity={0.5}
          hitSlop={{ top: 20, bottom: 20, left: 25, right: 25 }}
        >
          <AppText color={'#c77800'}>Alterar dados</AppText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setStoredUser(null);
            navigation.navigate('Login');
          }}
          activeOpacity={0.5}
          hitSlop={{ top: 20, bottom: 20, left: 25, right: 25 }}
        >
          <AppText color={'#db0d52'}>Sair da conta</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  logo: {
    width: 45,
    height: 55,
  },
});
