import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

import AppText from "components/AppText";
import configs from "configs";

export default function AppSettingsNotification({ title, description }) {
  const [toggled, setToggled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.textContent}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.description}>{description}</AppText>
      </View>
      <View style={styles.content}>
        <Switch
          value={toggled}
          onValueChange={setToggled}
          trackColor={{
            true: configs.colors.primary,
            false: configs.colors.grey,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: configs.spacing.m,
  },
  content: {
    paddingVertical: configs.spacing.m,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: configs.colors.body,
  },
  textContent: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: configs.colors.secondary,
  },
});
