import React, { useRef } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Animated, { divide, multiply } from "react-native-reanimated";
import {
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/lib/module/v1";

import AppOnboardingSlide, {
  SLIDE_HEIGHT,
} from "components/AppOnboardingSlide";
import configs from "configs";
import OnboardSlides from "services/OnboardSlides";
import AppOnboardingSubslide from "components/AppOnboardingSubslide";
import AppOnboardSlideDot from "components/AppOnboardSlideDot";

const { width, height } = Dimensions.get("window");

export default function OnBoardScreen() {
  const scroll = useRef(null);

  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: OnboardSlides.map((_, i) => i * width),
    outputRange: OnboardSlides.map(slide => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          decelerationRate="fast"
          bounces={false}
          {...scrollHandler}>
          {OnboardSlides.map((item, index) => (
            <AppOnboardingSlide
              key={index}
              label={item.label}
              right={index % 2 !== 0}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[styles.footerAbsolute, { backgroundColor }]} />
        <View style={[styles.footerContainer]}>
          <View style={styles.paginationContainer}>
            {OnboardSlides.map((_, index) => (
              <AppOnboardSlideDot
                key={index}
                index={index}
                currentIndex={divide(x, width)}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * OnboardSlides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}>
            {OnboardSlides.map((item, index) => (
              <AppOnboardingSubslide
                key={index}
                subtitle={item.subtitle}
                description={item.description}
                last={OnboardSlides.length - 1 === index}
                x={x}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current.scrollTo({
                      x: width * (index + 1),
                      animated: true,
                    });
                  }
                }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  footer: {
    flex: 1,
  },
  footerAbsolute: {
    ...StyleSheet.absoluteFillObject,
  },
  footerContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 75,
    flex: 1,
  },
  paginationContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
});
