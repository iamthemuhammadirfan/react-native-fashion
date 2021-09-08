import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Svg, { Path, Image, Defs, ClipPath } from "react-native-svg";

import configs from "configs";

const { width } = Dimensions.get("window");
const viewBox = {
  width: 374,
  height: 100,
};
const height = (viewBox.height * width) / viewBox.width;
const d = "M 0 100 A 50 50 0 0 1 50 50 H 325 A 50 50 0 0 0 375 0 V 100 Z";

export default function AppTransactionContent({ children }) {
  return (
    <View style={styles.container}>
      {children}
      <Svg
        style={styles.svg}
        width={width}
        height={height}
        viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}>
        <Defs>
          <ClipPath id="clip">
            <Path fill={configs.colors.white} d={d} />
          </ClipPath>
        </Defs>
        <Image
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          href={require("assets/images/pattern1.png")}
          clipPath="url(#clip)"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  svg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
