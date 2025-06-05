import React from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import colors from "design-system/tokens/colors";
import spacing from "design-system/tokens/spacing";
import sizes from "design-system/tokens/sizes";
import Icon from "react-native-vector-icons/MaterialIcons";
import AppText from "./AppText";

export default function TextInput({ label, style, ...props }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <AppText style={styles.label}>{label}</AppText>
        <RNTextInput
          style={[styles.input, style]}
          placeholderTextColor={colors.gray}
          {...props}
        />
        {props.secureTextEntry && (
          <TouchableOpacity
            style={styles.icon}
            onPress={props.onHideInputToggle}
          >
            <Icon
              name={props.hideInput ? "visibility" : "visibility-off"}
              size={20}
              color={colors.gray}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: spacing.md,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: sizes.xs,
    position: "relative",
  },
  label: {
    position: "absolute",
    top: -sizes.xs,
    left: spacing.md,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.sm,
    fontSize: sizes.sm,
    color: colors.darkerGray,
    fontWeight: "500",
    zIndex: 2,
  },
  input: {
    flex: 1,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    fontSize: sizes.sm,
    color: colors.black,
  },
  icon: {
    padding: spacing.sm,
  },
});
