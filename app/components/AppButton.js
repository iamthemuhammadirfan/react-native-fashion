import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import configs from "configs";

export default function AppButton({
  label,
  variant,
  style,
  onPress,
  children,
}) {
  const backgroundColor =
    variant === "primary"
      ? configs.colors.primary
      : variant === "transparent"
      ? "transparent"
      : "rgba(12,13,52,0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }, style]}
      activeOpacity={0.8}
      onPress={onPress}>
      {children ? (
        children
      ) : (
        <AppText style={[styles.label, { color }]}>{label}</AppText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 15,
  },
});
