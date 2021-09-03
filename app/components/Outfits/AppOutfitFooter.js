import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "components/AppButton";
import configs from "configs";

export default function AppOutfitFooter({ label, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AppButton {...{ label, onPress }} variant="primary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: configs.colors.secondary,
    padding: configs.spacing.m,
    borderTopLeftRadius: configs.borderRadius.xl,
  },
  content: {
    alignItems: "center",
    paddingBottom: configs.spacing.s,
  },
});
