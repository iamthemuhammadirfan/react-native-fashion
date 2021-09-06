import React from "react";
import { StyleSheet, View } from "react-native";
import moment from "moment";

import AppText from "components/AppText";
import configs from "configs";

export default function AppTransactionHistory({ transaction }) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <View
            style={[styles.circle, { backgroundColor: transaction.color }]}
          />
          <AppText
            style={styles.transactionTitle}>{`#${transaction.id}`}</AppText>
        </View>
        <AppText style={styles.transactionAmount}>
          {`$${transaction.value} - ${moment(transaction.date).format(
            "MMMM DD, YYYY",
          )}`}
        </AppText>
      </View>
      <View>
        <AppText style={styles.button}>See more</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: configs.colors.secondary,
    fontSize: 15,
    fontWeight: "bold",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: configs.spacing.s,
  },
  container: {
    flexDirection: "row",
    marginTop: configs.spacing.l,
    justifyContent: "space-between",
    alignItems: "center",
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: configs.spacing.s,
  },
  transactionAmount: {
    color: configs.colors.darkGrey,
  },

  transactionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: configs.colors.secondary,
  },
});
