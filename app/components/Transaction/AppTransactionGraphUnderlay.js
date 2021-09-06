import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppText from "components/AppText";
import configs from "configs";
import { lerp } from "utils/Helper";

export default function AppTransactionGraphUnderlay({
  dates,
  minY,
  maxY,
  step,
}) {
  return (
    <View style={{ ...StyleSheet.absoluteFill }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}>
        {[1, 0.66, 0.33, 0].map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 16,
              top: item === 0 ? 16 / 2 : item === 1 ? -16 / 2 : 0,
            }}>
            <View
              style={{
                width: configs.spacing.xl,
                paddingRight: configs.spacing.s,
              }}>
              <AppText
                style={{ color: configs.colors.darkGrey, textAlign: "right" }}>
                {Math.round(lerp(minY, maxY, item))}
              </AppText>
            </View>

            <View
              style={{
                backgroundColor: configs.colors.grey,
                height: 1,
                flex: 1,
              }}
            />
          </View>
        ))}
      </View>
      <View
        style={{
          marginLeft: configs.spacing.xl,
          height: configs.spacing.xl,
          flexDirection: "row",
          alignItems: "center",
        }}>
        {dates.map((item, index) => (
          <View key={index} style={{ width: step, alignItems: "center" }}>
            <AppText style={{ color: configs.colors.darkGrey }}>
              {Intl.DateTimeFormat("en", { month: "short" }).format(
                new Date(item),
              )}
            </AppText>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
