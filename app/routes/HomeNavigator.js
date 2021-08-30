import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "screens/HomeScreen";
import AppDrawer, { DRAWER_WIDTH } from "layouts/AppDrawer";

const Drawer = createDrawerNavigator();

export default function HomeNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={AppDrawer}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: DRAWER_WIDTH,
        },
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
