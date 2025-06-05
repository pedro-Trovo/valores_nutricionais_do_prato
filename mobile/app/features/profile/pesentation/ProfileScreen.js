import AppText from "design-system/components/AppText";
import Header from "design-system/components/Header";
import { View } from "react-native";
import sizes from "design-system/tokens/sizes";
import colors from "design-system/tokens/colors";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Header onBack={() => navigation.goBack()} />
      <View style={{ flex: 1, alignItems: "center" }}>
        <AppText fontSize={sizes.lg} color={colors.darkerGray}>
          Profile Screen
        </AppText>
      </View>
    </View>
  );
}
