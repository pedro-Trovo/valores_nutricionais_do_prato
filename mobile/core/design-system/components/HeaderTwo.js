import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import spacing from '../tokens/spacing';
import DetailsIcon from '../svgs/DetailsIcon';
import UserIcon from '../svgs/UserIcon';

export default function HeaderTwo() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            style={styles.logo}
            source={require('./../../../assets/logo.png')}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>

        <View style={styles.subcontainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <DetailsIcon />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <UserIcon />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
