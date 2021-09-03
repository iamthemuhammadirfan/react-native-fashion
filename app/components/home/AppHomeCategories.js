import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import AppHomeCategory from "./AppHomeCategory";

const categories = [
  {
    id: "newin",
    title: "New In",
    color: "#FFDDDD",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#BEECC4",
  },
  {
    id: "activewear",
    title: "Active Wear",
    color: "#BFEAF5",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#F1E0FF",
  },
  {
    id: "accesories",
    title: "Accesories",
    color: "#FFE8E9",
  },
];

export default function AppHomeCategories() {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <AppHomeCategory key={index} color={item.color} title={item.title} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
