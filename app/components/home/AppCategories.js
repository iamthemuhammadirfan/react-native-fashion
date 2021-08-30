import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import AppCategory from "./AppCategory";

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

export default function AppCategories() {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <AppCategory key={index} color={item.color} title={item.title} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
