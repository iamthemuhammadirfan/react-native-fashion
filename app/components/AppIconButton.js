import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Feather";
export default function AppIconButton({
  icon,
  color,
  size,
  backgroundColor,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ backgroundColor, height: size }}
      onPress={onPress}>
      <Icon name={icon} color={color} size={size} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
