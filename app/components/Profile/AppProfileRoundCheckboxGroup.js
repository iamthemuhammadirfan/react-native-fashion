import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import configs from "configs";
import AppText from "components/AppText";

export default function AppProfileRoundCheckboxGroup({
  options,
  valueIsColor,
}) {
  const [selectedValues, setSelectedValues] = useState([]);

  return (
    <View style={styles.container}>
      {options.map(option => {
        const index = selectedValues.indexOf(option);
        const isSelected = index !== -1;
        const backgroundColor = isSelected
          ? configs.colors.primary
          : configs.colors.grey;

        return (
          <TouchableOpacity
            key={option}
            activeOpacity={0.8}
            onPress={() => {
              if (isSelected) {
                selectedValues.splice(index, 1);
              } else {
                selectedValues.push(option);
              }
              setSelectedValues([...selectedValues]);
            }}>
            <View style={[styles.circle, { borderWidth: isSelected ? 1 : 0 }]}>
              <View
                style={[
                  styles.innerCircle,
                  {
                    backgroundColor: valueIsColor ? option : backgroundColor,
                  },
                ]}>
                {!valueIsColor && (
                  <AppText
                    style={[
                      styles.textValue,
                      {
                        color: isSelected
                          ? configs.colors.white
                          : configs.colors.secondary,
                      },
                    ]}>
                    {option.toUpperCase()}
                  </AppText>
                )}
                {valueIsColor && isSelected && (
                  <Icon color={configs.colors.white} name="check" size={16} />
                )}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: configs.colors.grey,
    marginBottom: configs.spacing.m,
    marginRight: configs.spacing.s,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: configs.spacing.s,
  },
  innerCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textValue: {
    fontSize: 12,
    lineHeight: 24,
    fontWeight: "bold",
    color: configs.colors.secondary,
    textAlign: "center",
  },
});
