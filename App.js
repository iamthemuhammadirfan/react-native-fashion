import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "routes/AppNavigator";
import configs from "configs";

export default function App() {
  StatusBar.setBarStyle("dark-content");
  StatusBar.setBackgroundColor(configs.colors.white);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
