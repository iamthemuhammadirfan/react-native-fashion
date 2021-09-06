import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "screens/HomeScreen";
import OutfitIdeasScreen from "screens/OutfitIdeasScreen";
import FavoriteOutfitsScreen from "screens/FavoriteOutfitsScreen";
import TransactionHistoryScreen from "screens/TransactionHistoryScreen";
import AppDrawer, { DRAWER_WIDTH } from "layouts/AppDrawer";

const Drawer = createDrawerNavigator();

export default function HomeNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="TransactionHistoryScreen"
      drawerContent={props => <AppDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: DRAWER_WIDTH,
        },
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="OutfitIdeasScreen" component={OutfitIdeasScreen} />
      <Drawer.Screen
        name="FavoriteOutfitsScreen"
        component={FavoriteOutfitsScreen}
      />
      <Drawer.Screen
        name="TransactionHistoryScreen"
        component={TransactionHistoryScreen}
      />
    </Drawer.Navigator>
  );
}
