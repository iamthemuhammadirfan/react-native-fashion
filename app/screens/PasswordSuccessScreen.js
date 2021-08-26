import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import AppAuthContainer from "components/Auth/AppAuthContainer";
import AppText from "components/AppText";
import configs from "configs";
import AppAuthCloseButton from "components/Auth/AppAuthCloseButton";
import AppButton from "components/AppButton";

export default function PasswordSuccessScreen({ navigation }) {
  return (
    <AppAuthContainer
      footer={
        <View style={{ alignItems: "center" }}>
          <AppAuthCloseButton onPress={() => navigation.pop()} />
        </View>
      }>
      <View style={styles.content}>
        <View style={styles.icon}>
          <Icon name="check" color={configs.colors.primary} size={32} />
        </View>
        <AppText style={styles.title}>
          Your password was successfully changed
        </AppText>
        <AppText style={styles.description}>
          Close this window and login again
        </AppText>
        <View style={styles.button}>
          <AppButton
            variant="primary"
            label="Login again"
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </View>
      </View>
    </AppAuthContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginTop: configs.spacing.s,
  },
  content: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "rgba(12, 13, 52, 0.7)",
    marginBottom: configs.spacing.l,
  },
  icon: {
    backgroundColor: configs.colors.primaryLight,
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: configs.spacing.xl,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 36,
    textAlign: "center",
    color: "#0C0D34",
    marginBottom: configs.spacing.m,
  },
});
