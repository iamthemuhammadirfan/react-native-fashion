import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import OutfitIdeasScreen from "screens/OutfitIdeasScreen";
import FavoriteOutfitsScreen from "screens/FavoriteOutfitsScreen";
import TransactionHistoryScreen from "screens/TransactionHistoryScreen";
import EditProfileScreen from "screens/EditProfileScreen";
import AppDrawer, { DRAWER_WIDTH } from "layouts/AppDrawer";

const Drawer = createDrawerNavigator();

export default function HomeNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="OutfitIdeasScreen"
      drawerContent={props => <AppDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: DRAWER_WIDTH,
        },
        drawerType: "slide",
      }}>
      <Drawer.Screen name="OutfitIdeasScreen" component={OutfitIdeasScreen} />
      <Drawer.Screen
        name="FavoriteOutfitsScreen"
        component={FavoriteOutfitsScreen}
      />
      <Drawer.Screen
        name="TransactionHistoryScreen"
        component={TransactionHistoryScreen}
      />
      <Drawer.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Drawer.Navigator>
  );
}
