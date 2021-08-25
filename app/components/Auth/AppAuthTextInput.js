import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Icon from "react-native-vector-icons/Feather";

import configs from "configs";

const inputState = {
  valid: "valid",
  inValid: "in-valid",
  pristine: "pristine",
};
export default function AppAuthTextInput({ icon, validator, ...rest }) {
  const [input, setInput] = useState("");
  const [valid, setValid] = useState(inputState.pristine);

  const borderColor =
    valid === inputState.valid
      ? configs.colors.primary
      : valid === inputState.inValid
      ? configs.colors.danger
      : configs.colors.inputPristine;

  const validate = () => {
    const result = validator(input);
    if (result === true) setValid(inputState.valid);
    else setValid(inputState.inValid);
  };
  const handleChangeText = text => {
    setInput(text);
    if (valid !== inputState.pristine) validate();
  };
  return (
    <View style={[styles.container, { borderColor }]}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={16} color={borderColor} />
      </View>
      <View style={styles.input}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={borderColor}
          onBlur={validate}
          onChangeText={handleChangeText}
          {...rest}
        />
      </View>
      {(valid === inputState.valid || valid === inputState.inValid) && (
        <View
          style={[
            styles.icon,
            {
              backgroundColor:
                valid === inputState.valid
                  ? configs.colors.primary
                  : configs.colors.danger,
            },
          ]}>
          <Icon
            name={valid === inputState.valid ? "check" : "x"}
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
