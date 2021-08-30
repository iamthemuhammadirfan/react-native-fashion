import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width } = Dimensions.get("window");
const ASPECT_RATIO = 750 / 1125;
const height = width * ASPECT_RATIO;

const assets = [
  require("assets/images/pattern1.png"),
  require("assets/images/pattern2.png"),
  require("assets/images/pattern3.png"),
];

export default function AppAuthContainer({ children, footer, pattern = 0 }) {
  return (
    <View style={styles.container}>
      <View style={styles.showcase}>
        <View style={styles.imageContainer}>
          <Image
            source={assets[pattern]}
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
        <View style={styles.overlay}>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}>
            {children}
          </KeyboardAwareScrollView>
        </View>
      </View>
      {footer}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  showcase: {
    backgroundColor: "white",
  },
});
