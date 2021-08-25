import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import AppAuthSocialLogin from "components/Auth/AppAuthSocialLogin";

import AppText from "components/AppText";
import configs from "configs";

export default function AppAuthFooter({ title, action, onPress }) {
  return (
    <View style={styles.container}>
      <AppAuthSocialLogin />
      <View style={{ alignItems: "center", marginTop: configs.spacing.m }}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
          <AppText style={{ color: configs.colors.white }}>
            <AppText>{title}</AppText>
            <AppText style={{ color: configs.colors.primary }}>
              {action}
            </AppText>
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: configs.colors.secondary,
  },
});
