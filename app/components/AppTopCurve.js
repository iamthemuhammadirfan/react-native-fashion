import React from "react";
import Svg, { Circle, ClipPath, Defs, Path, Rect } from "react-native-svg";

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
      <Defs>
        <ClipPath id="clip">
          <Path
            d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1"
            fill={configs.colors.secondary}
          />
        </ClipPath>
      </Defs>
      <Rect
        clipPath="url(#clip)"
        x={0}
        y={0}
        width={1}
        height={1}
        fill={configs.colors.secondary}
      />
      <Circle
        cx={0.4}
        cy={0.5}
        r={0.5}
        clipPath="url(#clip)"
        fill={configs.colors.secondary}
      />
    </Svg>
  );
}
