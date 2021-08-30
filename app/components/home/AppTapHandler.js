import React from "react";
import { StyleSheet, View } from "react-native";
import { State, TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  and,
  call,
  clockRunning,
  cond,
  eq,
  greaterThan,
  not,
  set,
  neq,
  startClock,
  stopClock,
  useCode,
} from "react-native-reanimated";
import {
  useClock,
  useTapGestureHandler,
  useValue,
} from "react-native-redash/lib/module/v1";

export default function AppTapHandler({ children, onPress }) {
  const clock = useClock();
  const start = useValue(0);
  const { gestureHandler, state } = useTapGestureHandler();
  const opacity = useValue(0);
  useCode(
    () => [
      cond(and(not(clockRunning(clock)), eq(state, State.END)), [
        startClock(clock),
        set(start, clock),
      ]),
      cond(neq(state, State.BEGAN), stopClock(clock)),
      cond(eq(state, State.END), [call([], onPress), stopClock(clock)]),
      set(
        opacity,
        cond(
          and(greaterThan(clock, add(start, 100)), clockRunning(clock)),
          0.5,
          1,
        ),
      ),
    ],
    [],
  );
  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ opacity }}>{children}</Animated.View>
    </TapGestureHandler>
  );
}

const styles = StyleSheet.create({});
