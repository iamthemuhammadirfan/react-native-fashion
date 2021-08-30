import React from "react";
import { StyleSheet, Dimensions, View, Image } from "react-native";
import {
  useNavigation,
  DrawerActions,
  CommonActions,
} from "@react-navigation/native";

import configs from "configs";
import AppText from "components/AppText";
import DrawerItems from "services/DrawerItems";
import AppDrawerItem from "./AppDrawerItem";
import AppIconButton from "components/AppIconButton";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

export default function AppDrawer() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerOverlay}>
          <AppIconButton
            icon="x"
            color={configs.colors.white}
            size={24}
            backgroundColor={configs.colors.secondary}
            onPress={() => console.log(DrawerActions)}
          />
          <AppText style={{ color: configs.colors.white }}>MY PROFILE</AppText>
          <AppIconButton
            icon="shopping-bag"
            color={configs.colors.white}
            size={24}
            backgroundColor={configs.colors.secondary}
          />
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={{ backgroundColor: configs.colors.secondary, flex: 1 }} />
        <View style={styles.mainOverlay}>
          <View style={styles.profileContainer} />
          <View style={styles.textContent}>
            <AppText style={styles.username}>Mike Peter</AppText>
            <AppText style={styles.email}>peter@flexinstudio.com</AppText>
          </View>
          {DrawerItems.map((item, index) => (
            <AppDrawerItem
              key={index}
              label={item.label}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </View>
      </View>

      <View style={styles.footerContainer}>
        <Image
          source={require("assets/images/drawer.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: configs.borderRadius.xl,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  email: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: configs.colors.body,
  },
  footerContainer: {
    width: DRAWER_WIDTH,
    overflow: "hidden",
    flex: 0.15,
  },
  headerContainer: {
    flex: 0.15,
    backgroundColor: configs.colors.white,
  },
  headerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: configs.colors.secondary,
    borderBottomRightRadius: configs.borderRadius.xl,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: configs.spacing.m,
    paddingTop: configs.spacing.s,
  },
  mainContainer: {
    flex: 0.8,
  },
  mainOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: configs.colors.white,
    borderTopLeftRadius: configs.borderRadius.xl,
    borderBottomRightRadius: configs.borderRadius.xl,
    justifyContent: "center",
  },
  profileContainer: {
    position: "absolute",
    backgroundColor: configs.colors.primary,
    width: 100,
    height: 100,
    borderRadius: 50,
    top: -50,
    left: DRAWER_WIDTH / 2 - 50,
  },
  textContent: {
    marginVertical: configs.spacing.m,
  },
  username: {
    fontSize: 28,
    color: configs.colors.secondary,
    textAlign: "center",
  },
});
