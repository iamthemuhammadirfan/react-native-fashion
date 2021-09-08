import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppButton from "components/AppButton";
import configs from "configs";

export default function AppProfileCheckboxGroup({ options, radio }) {
  const [selectedValues, setSelectedValues] = useState([]);

  return (
    <View style={styles.container}>
      {options.map(({ value, label }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        return (
          <AppButton
            key={value}
            variant={isSelected ? "primary" : "default"}
            onPress={() => {
              if (radio) {
                setSelectedValues([value]);
              } else {
                if (isSelected) {
                  selectedValues.splice(index, 1);
                } else {
                  selectedValues.push(value);
                }
                setSelectedValues([...selectedValues]);
              }
            }}
            label={label}
            style={styles.button}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "auto",
    height: "auto",
    padding: 16,
    marginBottom: configs.spacing.m,
    marginRight: configs.spacing.s,
  },
  container: {
    flexDirection: "row",
    marginTop: configs.spacing.s,
    flexWrap: "wrap",
  },
});
