import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

export default function AppButton({ label, variant, onPress }) {
  const backgroundColor =
    variant === "primary"
      ? "#2CB9B0"
      : variant === "transparent"
      ? "transparent"
      : "rgba(12,13,52,0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}>
      <AppText style={[styles.label, { color }]}>{label}</AppText>
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
