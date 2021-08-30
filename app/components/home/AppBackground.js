import configs from "configs";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AppBackground() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1 / 3,
          backgroundColor: configs.colors.oragne,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: configs.colors.white,
            borderBottomRightRadius: configs.borderRadius.xl,
          }}></View>
      </View>
      <View style={{ flex: 1 / 3 }}>
        <View style={{ flex: 1, backgroundColor: configs.colors.white }} />
        <View style={{ flex: 1, backgroundColor: configs.colors.secondary }} />
        <Image
          source={require("assets/images/background.png")}
          style={styles.image}
        />
      </View>
      <View
        style={{
          flex: 1 / 3,
          backgroundColor: configs.colors.lightBlue,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: configs.colors.secondary,
            borderTopLeftRadius: configs.borderRadius.xl,
          }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: configs.borderRadius.xl,
    borderBottomRightRadius: configs.borderRadius.xl,
  },
});
