import React from "react";
import { StyleSheet, Text, View } from "react-native";

import configs from "configs";
import AppHeader from "components/AppHeader";
import AppBackground from "components/home/AppBackground";
import AppCard from "components/home/AppCard";

export default function OutfitIdeasScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <AppHeader
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <View style={styles.container}>
        <AppBackground />
        <AppCard position={1} />
        <AppCard position={0.5} />
        <AppCard position={0} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: configs.colors.white,
  },
});
