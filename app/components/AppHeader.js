import React from "react";
import { StyleSheet, View } from "react-native";

import AppIconButton from "components/AppIconButton";
import configs from "configs";
import AppText from "components/AppText";

export default function AppHeader({ right, left, title, dark }) {
  const color = dark ? configs.colors.white : configs.colors.secondary;
  const backgroundColor = dark ? configs.colors.secondary : configs.colors.gray;
  return (
    <View style={styles.container}>
      <AppIconButton
        icon={left.icon}
        color={color}
        size={30}
        backgroundColor={backgroundColor}
        onPress={left.onPress}
      />
      <AppText style={{ color, fontSize: 16, fontWeight: "bold" }}>
        {title.toUpperCase()}
      </AppText>
      {right ? (
        <AppIconButton
          icon={right.icon}
          color={color}
          size={30}
          backgroundColor={backgroundColor}
          onPress={right.onPress}
          dark={dark}
        />
      ) : (
        <View style={{ width: 40 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: configs.spacing.s,
    paddingTop: configs.spacing.s,
  },
});
