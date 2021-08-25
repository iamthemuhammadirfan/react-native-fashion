import React from "react";
import { StyleSheet, View } from "react-native";

import AppAuthContainer from "components/Auth/AppAuthContainer";
import AppAuthFooter from "components/Auth/AppAuthFooter";
import AppText from "components/AppText";
import AppAuthTextInput from "components/Auth/AppAuthTextInput";
import configs from "configs";
import AppCheckbox from "components/AppCheckbox";
import AppButton from "components/AppButton";

const emailValidator = email =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email).toLowerCase(),
  );

const passwordValidator = password => password.length >= 4;

export default function LoginScreen() {
  return (
    <AppAuthContainer footer={<AppAuthFooter />}>
      <View style={styles.content}>
        <AppText style={styles.title}>Welcome Back</AppText>
        <AppText style={styles.description}>
          Use your credentials below and login to your account
        </AppText>
        <View style={styles.input}>
          <AppAuthTextInput
            icon="mail"
            placeholder="Enter Your Email"
            validator={emailValidator}
          />
        </View>
        <View style={styles.input}>
          <AppAuthTextInput
            icon="lock"
            placeholder="Enter Your Password"
            validator={passwordValidator}
          />
        </View>
        <View style={styles.checkbox}>
          <AppCheckbox label="Remember me" />
          <AppButton variant="transparent">
            <AppText style={{ color: configs.colors.primary }}>
              Forgot Password?
            </AppText>
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton variant="primary" label="Log into your account" />
        </View>
      </View>
    </AppAuthContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginTop: configs.spacing.m,
  },
  content: {
    padding: 24,
  },
  checkbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "rgba(12, 13, 52, 0.7)",
    marginBottom: configs.spacing.l,
  },
  input: {
    marginBottom: configs.spacing.m,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    color: "#0C0D34",
    marginBottom: 24,
  },
});
