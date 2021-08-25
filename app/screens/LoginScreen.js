import React from "react";
import { StyleSheet, View } from "react-native";

import AppAuthContainer from "components/Auth/AppAuthContainer";
import AppAuthFooter from "components/Auth/AppAuthFooter";
import AppText from "components/AppText";

export default function LoginScreen() {
  return (
    <AppAuthContainer footer={<AppAuthFooter />}>
      <AppText>hello G ki hal chal</AppText>
    </AppAuthContainer>
  );
}

const styles = StyleSheet.create({});
