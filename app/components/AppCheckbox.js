import configs from "configs";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import AppText from "./AppText";

export default function AppCheckbox({ label, checked, onChange }) {
  return (
    <TouchableOpacity onPress={onChange} activeOpacity={0.7}>
      <View style={styles.container}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: checked
                ? configs.colors.primary
                : configs.colors.white,
            },
          ]}>
          <Icon name="check" color={configs.colors.white} />
        </View>
        <AppText>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  iconContainer: {
    borderRadius: configs.borderRadius.s,
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: configs.colors.primary,
    borderWidth: 1,
    marginRight: configs.spacing.s,
  },
});
