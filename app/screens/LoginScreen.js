import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";

import AppAuthSocialLogin from "components/AppAuthSocialLogin";

const { width } = Dimensions.get("window");
const ASPECT_RATIO = 750 / 1125;
const height = width * ASPECT_RATIO;

export default function LoginScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.showcase}>
        <View style={styles.imageContainer}>
          <Image
            source={require("assets/images/pattern1.png")}
            style={{ width, height, borderBottomLeftRadius: 75 }}
          />
        </View>
      </View>

      <View style={styles.main}>
        <Image
          source={require("assets/images/pattern1.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <View style={styles.overlay}></View>
      </View>
      <View style={styles.footer}>
        <AppAuthSocialLogin />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 16,
    backgroundColor: "#0C0D34",
  },
  imageContainer: {
    height: height * 0.61,
    overflow: "hidden",
    borderBottomLeftRadius: 75,
  },
  main: {
    flex: 1,
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 75,
    borderTopLeftRadius: 0,
  },
  screen: {
    flex: 1,
    backgroundColor: "#0C0D34",
  },
  showcase: {
    backgroundColor: "white",
  },
});
