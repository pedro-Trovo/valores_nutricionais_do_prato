import { TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import colors from "design-system/tokens/colors";
import spacing from "design-system/tokens/spacing";
import sizes from "design-system/tokens/sizes";
import AppText from "./AppText";

export default function Button({
  title,
  onPress,
  style,
  textStyle,
  disabled,
  loading,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        (disabled || loading) && styles.buttonDisabled,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <AppText fontSize={sizes.sm} color={colors.white} style={textStyle}>
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: sizes.md,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: sizes.sm,
    marginTop: spacing.md,
  },
  buttonDisabled: {
    backgroundColor: colors.gray,
  },
});
