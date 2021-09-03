import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  Extrapolate,
  interpolateNode,
} from "react-native-reanimated";
import {
  mix,
  mixColor,
  usePanGestureHandler,
} from "react-native-redash/lib/module/v1";

import configs from "configs";
import { customWithSpring } from "layouts/AppAnimations";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.7;
const height = width * (425 / 294);

export default function AppHomeCard({ position, style, image, onSwipe, step }) {
  const { gestureHandler, translation, velocity, state } =
    usePanGestureHandler();
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 1, -50);
  const scale = mix(position, 1, 0.9);
  const translateX = customWithSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });

  const translateY = add(
    translateYOffset,
    customWithSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    }),
  );

  const imageScale = interpolateNode(position, {
    inputRange: [0, step],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View style={[styles.container, style]}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius: configs.borderRadius.l,
            transform: [{ translateY }, { translateX }, { scale }],
            overflow: "hidden",
          }}>
          <Animated.Image
            source={image}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              transform: [{ scale: imageScale }],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    justifyContent: "center",
    alignItems: "center",
  },
});
