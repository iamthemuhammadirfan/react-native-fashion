import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import configs from "configs";

export default function AppAuthCloseButton({ onPress }) {
  return (
    <TouchableOpacity
      style={{ paddingVertical: configs.spacing.m }}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.icon}>
        <Icon name="x" color={configs.colors.secondary} size={45} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: configs.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
