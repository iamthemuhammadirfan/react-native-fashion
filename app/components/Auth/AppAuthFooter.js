import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppAuthSocialLogin from "components/Auth/AppAuthSocialLogin";

export default function AppAuthFooter() {
  return (
    <View style={styles.container}>
      <AppAuthSocialLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: "#0C0D34",
  },
});
