import configs from "configs";
import React from "react";
import { Dimensions, StyleSheet, Image, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const { width } = Dimensions.get("window");
const viewBox = {
  width: 375,
  height: 100,
};
const height = (viewBox.height * width) / viewBox.width;
const d = "M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 50 50 0 0 0 0 100";

export default function AppSettingsContent({ children }) {
  return (
    <>
      <View style={styles.background}>
        <Image
          style={styles.image}
          source={require("assets/images/pattern1.png")}
        />
        <Image
          style={styles.image}
          source={require("assets/images/pattern2.png")}
        />
        <Image
          style={styles.image}
          source={require("assets/images/pattern3.png")}
        />
      </View>
      {children}
      <Svg
        width={width}
        height={height}
        viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}>
        <Path fill={configs.colors.white} d={d} />
      </Svg>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
  image: {
    width,
    height: (width * 750) / 1125,
  },
});
