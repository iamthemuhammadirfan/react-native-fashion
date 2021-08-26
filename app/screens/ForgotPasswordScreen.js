import React from "react";
import { Linking, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppAuthContainer from "components/Auth/AppAuthContainer";
import AppAuthFooter from "components/Auth/AppAuthFooter";
import AppText from "components/AppText";
import AppAuthTextInput from "components/Auth/AppAuthTextInput";
import configs from "configs";
import AppButton from "components/AppButton";

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid").required("Required").label("Email"),
});

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <AppAuthContainer
      footer={
        <AppAuthFooter
          title="Don’t work? "
          action="Try another way"
          onPress={() => Linking.openURL("https://www.google.com")}
        />
      }>
      <View style={styles.content}>
        <AppText style={styles.title}>Forgot password?</AppText>
        <AppText style={styles.description}>
          Enter the email address associated with your account
        </AppText>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgotPasswordSchema}
          onSubmit={values => navigation.navigate("PasswordSuccessScreen")}>
          {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (
            <View>
              <View style={styles.input}>
                <AppAuthTextInput
                  icon="mail"
                  placeholder="Enter Your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors["email"]}
                  touched={touched["email"]}
                  autoCompleteType="email"
                  autoCapitalize="none"
                  returnKeyType="go"
                  returnKeyLabel="go"
                  onSubmitEditing={() => handleSubmit()}
                />
              </View>
              <View style={styles.button}>
                <AppButton
                  variant="primary"
                  label="Reset Password"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </AppAuthContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginTop: configs.spacing.s,
  },
  content: {
    padding: 24,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "rgba(12, 13, 52, 0.7)",
    marginBottom: configs.spacing.l,
  },
  input: {
    marginBottom: configs.spacing.m,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 36,
    textAlign: "center",
    color: "#0C0D34",
    marginBottom: configs.spacing.m,
  },
});
