import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoardScreen from "screens/OnBoardScreen";
import WelcomeScreen from "screens/WelcomeScreen";
import LoginScreen from "screens/LoginScreen";
import SignupScreen from "screens/SignupScreen";
import ForgotPasswordScreen from "screens/ForgotPasswordScreen";
import PasswordSuccessScreen from "screens/PasswordSuccessScreen";

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
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="PasswordSuccessScreen"
        component={PasswordSuccessScreen}
      />
    </Stack.Navigator>
  );
}
