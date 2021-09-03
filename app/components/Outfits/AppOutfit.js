import React, { useState } from "react";
import { View } from "react-native";

import configs from "configs";
import AppRoundedIcon from "components/AppRoundedIcon";
import AppTapHandler from "components/AppTapHandler";

export default function AppOutfit({ outfit, width }) {
  const [selected, setSelected] = useState(false);
  return (
    <AppTapHandler
      onPress={() => {
        setSelected(prev => !prev);
        outfit.selected = !outfit.selected;
      }}>
      <View
        style={{
          backgroundColor: outfit.color,
          width,
          height: width * outfit.aspectRatio,
          borderRadius: configs.borderRadius.m,
          marginBottom: configs.spacing.m,
          alignItems: "flex-end",
          padding: configs.spacing.m,
        }}>
        {selected && (
          <AppRoundedIcon
            name="check"
            backgroundColor={configs.colors.primary}
            size={24}
            color={configs.colors.white}
          />
        )}
      </View>
    </AppTapHandler>
  );
}
