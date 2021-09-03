import React from "react";
import Svg, { Path } from "react-native-svg";

import configs from "configs";

export default function AppTopCurve({ height }) {
  return (
    <Svg
      width={configs.borderRadius.xl}
      height={configs.borderRadius.xl}
      style={{
        position: "absolute",
        bottom: height,
        right: 0,
      }}
      viewBox="0 0 1 1">
      <Path
        d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1"
        fill={configs.colors.secondary}
      />
    </Svg>
  );
}
