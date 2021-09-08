import React, { useLayoutEffect, useRef } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
// import { Transitioning, Transition } from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import configs from "configs";
import { lerp } from "utils/Helper";
import AppTransactionGraphUnderlay from "./AppTransactionGraphUnderlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

export default function AppTransactionGraph({ data }) {
  const transition = useSharedValue(0);
  useFocusEffect(() => {
    transition.value = withTiming(1, { duration: 650 });
    return () => (transition.value = 0);
  });
  const canvasWidth = wWidth - configs.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - configs.spacing.xl;
  const height = canvasHeight - configs.spacing.xl;

  const step = width / data.length;
  const values = data.map(item => item.value);
  const dates = data.map(item => item.date);
  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  return (
    <View style={styles.container}>
      <AppTransactionGraphUnderlay
        dates={dates}
        minY={minY}
        maxY={maxY}
        step={step}
      />
      <View style={{ width, height, overflow: "hidden" }}>
        {data.map((item, index) => {
          if (item.value === 0) return null;

          const totalHeight = lerp(0, height, item.value / maxY);

          const style = useAnimatedStyle(() => {
            const currentHeight = totalHeight * transition.value;
            const translateY = (totalHeight - currentHeight) / 2;
            return {
              transform: [{ translateY }, { scaleY: transition.value }],
            };
          });

          return (
            <Animated.View
              style={[
                {
                  position: "absolute",
                  width: step,
                  height: totalHeight,
                  left: index * step,
                  bottom: 0,
                },
                style,
              ]}
              key={index}>
              <View style={[styles.graph, { backgroundColor: item.color }]} />
              <View
                style={[styles.graphValue, { backgroundColor: item.color }]}
              />
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: configs.spacing.xl,
    paddingBottom: configs.spacing.xl,
    marginTop: configs.spacing.xl,
  },
  graph: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: configs.spacing.m,
    right: configs.spacing.m,
    borderTopRightRadius: configs.borderRadius.m,
    borderTopLeftRadius: configs.borderRadius.m,
    opacity: 0.1,
  },
  graphValue: {
    position: "absolute",
    top: 0,
    height: 32,
    left: configs.spacing.m,
    right: configs.spacing.m,
    borderRadius: configs.borderRadius.m,
  },
});
