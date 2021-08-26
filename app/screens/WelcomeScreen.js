import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

import AppText from "components/AppText";
import AppButton from "components/AppButton";

const picture = {
  source: require("assets/images/5.png"),
  width: 408,
  height: 612,
};

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Image
          source={picture.source}
          style={{
            width: width - 75,
            height: ((width - 75) * picture.height) / picture.width,
          }}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerOverlay} />
        <View style={styles.footerContent}>
          <AppText style={styles.title}>Let's get started</AppText>
          <AppText style={styles.description}>
            Login to your account below or signup for an amazing experience
          </AppText>
          <AppButton
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("LoginScreen")}
          />
          <AppButton
            label="Join us, it's Free"
            onPress={() => navigation.navigate("SignupScreen")}
          />
          <AppButton
            variant="transparent"
            label="Forgot Password?"
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    color: "rgba(12, 13, 52, 0.7)",
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 75,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  footerOverlay: {
    backgroundColor: "#F4F0EF",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  slider: {
    height: height * 0.53,
    backgroundColor: "#F4F0EF",
    borderBottomRightRadius: 75,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    color: "#0C0D34",
    fontFamily: "SFProBold",
  },
});
