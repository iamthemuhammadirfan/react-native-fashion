import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AppText from "components/AppText";
import AppProfileCheckboxGroup from "./AppProfileCheckboxGroup";
import AppAuthTextInput from "components/Auth/AppAuthTextInput";
import configs from "configs";

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export default function AppProfileInfo() {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}>
      <View style={styles.container}>
        <AppText style={styles.tagline}>Account Information</AppText>
        <View style={styles.input}>
          <AppAuthTextInput
            icon="user"
            placeholder="Name"
            autoCapitalize="none"
            autoCompleteType="name"
          />
        </View>
        <View style={styles.input}>
          <AppAuthTextInput
            icon="lock"
            placeholder="Enter your password"
            autoCompleteType="password"
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <View style={styles.input}>
          <AppAuthTextInput
            icon="map-pin"
            placeholder="Address"
            autoCapitalize="none"
            autoCompleteType="street-address"
          />
        </View>
        <AppProfileCheckboxGroup options={genders} radio />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: configs.spacing.m,
  },
  input: {
    marginBottom: configs.spacing.m,
  },
  tagline: {
    fontSize: 16,
    color: configs.colors.body,
    marginBottom: configs.spacing.m,
  },
});
