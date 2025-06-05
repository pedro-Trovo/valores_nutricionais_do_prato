import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../tokens/colors";
import sizes from "../tokens/sizes";
import spacing from "../tokens/spacing";
import { useNavigation } from "@react-navigation/native";

export default function Header({
  showBack = true,
  onBack,
  showHelp = false,
  onHelp,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack ? onBack : () => navigation.goBack()}
          activeOpacity={0.7}
        >
          <View style={styles.touchArea}>
            <Icon name="arrow-back" size={sizes.lg} color={colors.darkerGray} />
          </View>
        </TouchableOpacity>
      )}
      <View style={{ flex: 1 }} />
      {showHelp && (
        <TouchableOpacity
          style={styles.helpButton}
          onPress={onHelp}
          activeOpacity={0.7}
        >
          <View style={styles.touchArea}>
            <Icon
              name="help-outline"
              size={sizes.lg}
              color={colors.darkerGray}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.xxl + spacing.xxl,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.white,
  },
  backButton: {
    marginRight: sizes.lg,
  },
  helpButton: {
    marginLeft: sizes.lg,
  },
  touchArea: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
