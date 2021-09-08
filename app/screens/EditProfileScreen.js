import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import AppHeader from "components/AppHeader";
import configs from "configs";
import AppText from "components/AppText";
import AppProfileTabs from "components/Profile/AppProfileTabs";
import AppProfileConfiguration from "components/Profile/AppProfileConfiguration";
import AppProfileInfo from "components/Profile/AppProfileInfo";

const { width } = Dimensions.get("window");
const tabs = [
  { id: "config", title: "Configuration" },
  { id: "info", title: "Personal Info" },
];
export default function EditProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerOverlay}>
          <AppHeader
            title="Edit Profile"
            left={{
              icon: "menu",
              onPress: () => navigation.openDrawer(),
            }}
            dark={true}
          />
        </View>
      </View>
      <View>
        <View style={styles.profileContainer} />
        <View style={styles.textContent}>
          <AppText style={styles.username}>Mike Peter</AppText>
          <AppText style={styles.email}>peter@flexinstudio.com</AppText>
        </View>
      </View>
      <AppProfileTabs tabs={tabs}>
        <AppProfileConfiguration />
        <AppProfileInfo />
      </AppProfileTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: configs.colors.white,
  },
  email: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: configs.colors.body,
  },
  headerContainer: {
    flex: 0.2,
  },
  headerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: configs.colors.secondary,
    borderBottomRightRadius: configs.borderRadius.xl,
  },
  profileContainer: {
    position: "absolute",
    backgroundColor: configs.colors.primary,
    width: 100,
    height: 100,
    borderRadius: 50,
    top: -50,
    left: width / 2 - 50,
  },
  textContent: {
    marginVertical: configs.spacing.m,
    marginTop: 50 + configs.spacing.m,
  },
  username: {
    fontSize: 28,
    fontWeight: "bold",
    color: configs.colors.secondary,
    textAlign: "center",
  },
});
