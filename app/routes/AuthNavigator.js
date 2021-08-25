import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoardScreen from "screens/OnBoardScreen";
import WelcomeScreen from "screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoardScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
