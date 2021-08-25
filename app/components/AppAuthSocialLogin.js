import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Google from "Icons/Google";
import Facebook from "Icons/Facebook";
import Apple from "Icons/Apple";
import AppText from "./AppText";
import AppButton from "./AppButton";

export default function AppAuthSocialLogin() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Facebook />
        </View>
        <View style={styles.icon}>
          <Google />
        </View>
        <View style={styles.icon}>
          <Apple />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <AppButton variant="transparent">
          <View style={{ flexDirection: "row" }}>
            <AppText style={{ color: "white" }}>Don’t have an account?</AppText>
            <AppText style={{ color: "#2CB9B0", marginLeft: 8 }}>
              Sign Up here
            </AppText>
          </View>
        </AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    marginHorizontal: 8,
    backgroundColor: "white",
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
});
