import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import configs from "configs";
import AppHeader from "components/AppHeader";
import AppHomeBackground from "components/home/AppHomeBackground";
import AppHomeCard from "components/home/AppHomeCard";
import { useTransition } from "react-native-redash/lib/module/v1";
import { sub } from "react-native-reanimated";
import AppHomeCategories from "components/home/AppHomeCategories";

const cards = [
  { index: 3, source: require("assets/images/4.png") },
  { index: 2, source: require("assets/images/3.png") },
  { index: 1, source: require("assets/images/2.png") },
  { index: 0, source: require("assets/images/1.png") },
];
const step = 1 / (cards.length - 1);

export default function OutfitIdeasScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);
  return (
    <View style={styles.screen}>
      <AppHeader
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <AppHomeCategories />
      <View style={styles.container}>
        <AppHomeBackground />
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <AppHomeCard
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => setCurrentIndex(prev => prev + step)}
                image={source}
                step={step}
              />
            ),
        )}
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
