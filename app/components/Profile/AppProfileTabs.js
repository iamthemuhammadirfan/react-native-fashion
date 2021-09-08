import React, { useState, useLayoutEffect, Children } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Animated, { multiply } from "react-native-reanimated";

import AppText from "components/AppText";
import configs from "configs";
import { mix, useTransition } from "react-native-redash/lib/module/v1";

const { width } = Dimensions.get("window");

export default function AppProfileTabs({ tabs, children }) {
  const [index, setIndex] = useState(0);
  const transition = useTransition(index);
  const translateX = mix(transition, width * 0.25, width * 0.75);

  useLayoutEffect(() => {
    StatusBar.setBackgroundColor(configs.colors.secondary);
    StatusBar.setBarStyle("light-content");
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {tabs.map((item, index) => (
          <TouchableOpacity
            style={styles.tabButton}
            key={index}
            onPress={() => setIndex(index)}
            activeOpacity={0.8}>
            <View style={styles.tab}>
              <AppText style={styles.tabTitle}>{item.title}</AppText>
            </View>
          </TouchableOpacity>
        ))}
        <Animated.View style={[styles.dot, { transform: [{ translateX }] }]} />
      </View>
      <Animated.View
        style={{
          width: width * tabs.length,
          flexDirection: "row",
          transform: [{ translateX: multiply(-width, transition) }],
        }}>
        {Children.map(children, (child, index) => (
          <View style={styles.child} key={index}>
            {child}
          </View>
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  child: {
    flex: 1,
    width,
  },
  container: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
  },
  dot: {
    backgroundColor: configs.colors.primary,
    width: 10,
    height: 10,
    borderRadius: 5,
    position: "absolute",
    left: -5,
    bottom: 0,
  },
  tab: {
    padding: configs.spacing.m,
    paddingBottom: configs.spacing.m + 10,
  },
  tabButton: {
    flex: 1,
  },
  tabTitle: {
    fontSize: 16,
    color: configs.colors.secondary,
    fontWeight: "bold",
    textAlign: "center",
  },
});
