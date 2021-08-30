import React from "react";
import { View } from "react-native";

import Icon from "react-native-vector-icons/Feather";

export default function AppRoundedIcon({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
  align,
}) {
  const iconSize = size * iconRatio;
  return (
    <View
      style={{
        height: size,
        width: size,
        justifyContent: "center",
        alignItems: align,
        borderRadius: size / 2,
        backgroundColor,
      }}>
      <Icon name={name} color={color} size={iconSize} />
    </View>
  );
}
