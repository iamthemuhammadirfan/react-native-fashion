import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
  PixelRatio,
} from "react-native";

import AppHeader from "components/AppHeader";
import configs from "configs";
import AppText from "components/AppText";
import AppTransactionGraph from "components/Transaction/AppTransactionGraph";
import AppTransactionHistory from "components/Transaction/AppTransactionHistory";
import AppTopCurve from "components/AppTopCurve";
import AppTransactionContent from "components/Transaction/AppTransactionContent";

const graphData = [
  {
    id: 245674,
    date: new Date("2019-09-01").getTime(),
    value: 139.42,
    color: configs.colors.primary,
  },
  {
    id: 245675,
    date: new Date("2019-12-01").getTime(),
    value: 281.23,
    color: configs.colors.oragne,
  },

  {
    id: 245676,
    date: new Date("2020-01-02").getTime(),
    value: 198.54,
    color: configs.colors.yellow,
  },
  {
    id: 245677,
    date: new Date("2020-02-10").getTime(),
    value: 0,
    color: configs.colors.danger,
  },
  {
    id: 245678,
    date: new Date("2020-03-01").getTime(),
    value: 208.54,
    color: configs.colors.inputPristine,
  },
  {
    id: 245679,
    date: new Date("2020-04-03").getTime(),
    value: 258.54,
    color: configs.colors.voile,
  },
  {
    id: 245680,
    date: new Date("2020-05-10").getTime(),
    value: 158.54,
    color: configs.colors.body,
  },
];

const FOOTER_HEIGHT = PixelRatio.roundToNearestPixel(
  Dimensions.get("window").width / 3,
);

export default function TransactionHistoryScreen({ navigation }) {
  return (
    <AppTransactionContent>
      <View style={styles.screen}>
        <AppHeader
          title="Transaction History"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{ icon: "shopping-bag", onPress: () => true }}
        />
        <View style={styles.main}>
          <View style={styles.topBar}>
            <View>
              <AppText style={styles.priceTitle}>Total Spent</AppText>
              <AppText style={styles.price}>$619,19</AppText>
            </View>
            <View style={styles.button}>
              <AppText style={styles.buttonColor}>All time</AppText>
            </View>
          </View>
          <AppTransactionGraph data={graphData} />
          <ScrollView
            contentContainerStyle={{
              paddingBottom: FOOTER_HEIGHT * (graphData.length / 2),
            }}
            showsVerticalScrollIndicator={false}>
            {graphData.map((item, index) => (
              <AppTransactionHistory key={index} transaction={item} />
            ))}
          </ScrollView>
        </View>
      </View>
    </AppTransactionContent>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: configs.colors.primaryLight,
    borderRadius: configs.borderRadius.m,
    padding: configs.spacing.s,
  },
  buttonColor: {
    color: configs.colors.primary,
  },
  main: {
    padding: configs.spacing.m,
  },
  price: {
    fontWeight: "bold",
    fontSize: 28,
    color: configs.colors.secondary,
  },
  priceTitle: {
    fontSize: 12,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.3,
    color: configs.colors.secondary,
  },
  screen: {
    flex: 1,
    backgroundColor: configs.colors.white,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
