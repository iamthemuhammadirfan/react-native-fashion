import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppText from "components/AppText";
import configs from "configs";
import { lerp } from "utils/Helper";

const ROW_HEIGHT = 16;

export default function AppTransactionGraphUnderlay({
  dates,
  minY,
  maxY,
  step,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        {[1, 0.66, 0.33, 0].map((item, index) => (
          <View
            key={index}
            style={[
              styles.columnRow,
              {
                top:
                  item === 0
                    ? ROW_HEIGHT / 2
                    : item === 1
                    ? -ROW_HEIGHT / 2
                    : 0,
              },
            ]}>
            <View style={styles.column}>
              <AppText style={styles.columnText}>
                {Math.round(lerp(minY, maxY, item))}
              </AppText>
            </View>

            <View style={styles.line} />
          </View>
        ))}
      </View>
      <View style={styles.rowContainer}>
        {dates.map((item, index) => (
          <View key={index} style={{ width: step, alignItems: "center" }}>
            <AppText style={styles.rowText}>
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

const styles = StyleSheet.create({
  container: { ...StyleSheet.absoluteFill },
  column: {
    width: configs.spacing.xl,
    paddingRight: configs.spacing.s,
  },
  columnContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  columnRow: {
    flexDirection: "row",
    alignItems: "center",
    height: ROW_HEIGHT,
  },
  columnText: { color: configs.colors.darkGrey, textAlign: "right" },
  line: {
    backgroundColor: configs.colors.grey,
    height: 1,
    flex: 1,
  },
  rowContainer: {
    marginLeft: configs.spacing.xl,
    height: configs.spacing.xl,
    flexDirection: "row",
    alignItems: "center",
  },
  rowText: { color: configs.colors.darkGrey },
});
