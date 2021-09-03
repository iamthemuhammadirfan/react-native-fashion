import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "components/AppText";
import configs from "configs";
import AppTapHandler from "components/AppTapHandler";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

export default function AppHomeCategory({ id, color, title }) {
  const [selected, setSelected] = useState(false);

  return (
    <AppTapHandler onPress={() => setSelected(prev => !prev)}>
      <View style={styles.container}>
        <View
          style={{
            width: OUTER_RADIUS * 2,
            height: OUTER_RADIUS * 2,
            justifyContent: "center",
            alignItems: "center",
          }}>
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: color,
                borderWidth: 1,
              }}
            />
          )}
          <View
            style={{
              height: INNER_RADIUS * 2,
              width: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor: color,
            }}
          />
        </View>
        <AppText>{title}</AppText>
      </View>
    </AppTapHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: configs.spacing.m,
    alignItems: "center",
    marginTop: configs.spacing.s,
  },
});
