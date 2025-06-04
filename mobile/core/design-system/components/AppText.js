import React from "react";
import { Text } from "react-native";
import colors from "../tokens/colors";
import sizes from "../tokens/sizes";

const FONT_MAP = {
  thin: "Lato-Thin",
  light: "Lato-Light",
  regular: "Lato-Regular",
  bold: "Lato-Bold",
  black: "Lato-Black",
};

export default function AppText({
  style,
  children,
  weight = FONT_MAP.regular,
  fontSize = sizes.md,
  color = colors.black,
  ...props
}) {
  const fontFamily = FONT_MAP[weight] || FONT_MAP.regular;

  return (
    <Text style={[{ fontFamily, color, fontSize }, style]} {...props}>
      {children}
    </Text>
  );
}
