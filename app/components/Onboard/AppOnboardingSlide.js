import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import AppText from "components/AppText";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = height * 0.61;
export default function AppOnboardingSlide({ label, right }) {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <AppText style={styles.title}>{label}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: SLIDE_HEIGHT,
  },
  title: {
    fontFamily: "SFProBold",
    fontSize: 80,
    lineHeight: 80,
    color: "white",
    textAlign: "center",
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});
