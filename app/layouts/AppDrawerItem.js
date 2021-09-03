import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import AppText from "components/AppText";
import AppRoundedIcon from "components/AppRoundedIcon";
import configs from "configs";

export default function AppDrawerItem({ color, icon, label, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <AppRoundedIcon
          name={icon}
          size={36}
          backgroundColor={color}
          color={configs.colors.white}
          align="center"
          iconRatio={0.5}
        />
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: configs.spacing.s,
  },
  text: {
    marginLeft: configs.spacing.m,
    fontWeight: "bold",
    fontSize: 15,
    color: configs.colors.secondary,
  },
});
