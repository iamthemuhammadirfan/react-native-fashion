import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import AppText from "components/AppText";
import configs from "configs";
import AppProfileCheckboxGroup from "./AppProfileCheckboxGroup";
import AppProfileRoundCheckboxGroup from "./AppProfileRoundCheckboxGroup";

const outfitTypes = [
  { value: "men", label: "For men" },
  { value: "women", label: "For women" },
  { value: "both", label: "Both" },
];
const sizes = ["s", "m", "l", "xl", "xxl"];
const colors = ["#0C0D34", "#FF0058", "#50B9DE", "#00D99A", "#FE5E33"];
const brands = [
  { value: "adidas", label: "Adidas" },
  { value: "nike", label: "Nike" },
  { value: "converse", label: "Converse" },
  { value: "tommy-hilfiger", label: "Tommy Hilfiger" },
  { value: "billionaire-boys-club", label: "Billionaire Boys Club" },
  { value: "jordan", label: "Jordan" },
  { value: "le-coq-sportif", label: "Le Coq Sportif" },
];

export default function AppProfileConfiguration() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <AppText style={styles.tagline}>
          What type of outfits do you usually wear?
        </AppText>
        <AppProfileCheckboxGroup options={outfitTypes} radio={true} />
        <AppText style={styles.tagline}>What is your clothing size?</AppText>
        <AppProfileRoundCheckboxGroup options={sizes} />
        <AppText style={styles.tagline}>My preferred clothing colors</AppText>
        <AppProfileRoundCheckboxGroup options={colors} valueIsColor />
        <AppText style={styles.tagline}>My preferred brands</AppText>
        <AppProfileCheckboxGroup options={brands} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: configs.spacing.m,
  },
  scrollView: {
    paddingBottom: configs.spacing.xl,
  },
  tagline: {
    fontSize: 16,
    lineHeight: 24,
    color: configs.colors.body,
  },
});
