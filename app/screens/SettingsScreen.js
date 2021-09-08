import React from "react";
import { StyleSheet, View } from "react-native";

import AppHeader from "components/AppHeader";
import configs from "configs";
import AppSettingsNotification from "components/Settings/AppSettingsNotification";
import AppSettingsContent from "components/Settings/AppSettingsContent";

export default function SettingsScreen({ navigation }) {
  return (
    <AppSettingsContent>
      <View style={styles.screen}>
        <AppHeader
          title="Notifications"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{ icon: "shopping-bag", onPress: () => true }}
        />
        <View style={styles.container}>
          <AppSettingsNotification
            title="Outfit Ideas"
            description="Receive daily notifications"
          />
          <AppSettingsNotification
            title="Discounts & Sales"
            description="Buy the stuff you love for less"
          />
          <AppSettingsNotification
            title="Stock Notification"
            description="If the product you love comes back in stock"
          />
          <AppSettingsNotification
            title="New Stuff"
            description="Hear it first, wear it first"
          />
        </View>
      </View>
    </AppSettingsContent>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: configs.spacing.m,
  },
  screen: {
    backgroundColor: configs.colors.white,
  },
});
