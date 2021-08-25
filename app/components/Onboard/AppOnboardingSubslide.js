import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "components/AppButton";
import AppText from "components/AppText";

export default function AppOnboardingSubslide({
  subtitle,
  description,
  last,
  x,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
      <AppText style={styles.description}>{description}</AppText>
      <AppButton
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  subtitle: {
    fontFamily: "SFProBold",
    fontSize: 24,
    marginBottom: 12,
    color: "#0C0D34",
    lineHeight: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#0C0D34",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 40,
  },
});
