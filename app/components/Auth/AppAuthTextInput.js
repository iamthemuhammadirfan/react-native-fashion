import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import configs from "configs";

export default function AppAuthTextInput({ icon, error, touched, ...rest }) {
  const borderColor = !touched
    ? configs.colors.inputPristine
    : error
    ? configs.colors.danger
    : configs.colors.primary;

  return (
    <View style={[styles.container, { borderColor }]}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={16} color={borderColor} />
      </View>
      <View style={styles.input}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={borderColor}
          {...rest}
        />
      </View>
      {touched && (
        <View
          style={[
            styles.icon,
            {
              backgroundColor: !error
                ? configs.colors.primary
                : configs.colors.danger,
            },
          ]}>
          <Icon
            name={!error ? "check" : "x"}
            size={16}
            color={configs.colors.white}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: configs.spacing.s,
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    padding: configs.spacing.s,
  },
  input: {
    flex: 1,
  },
});
