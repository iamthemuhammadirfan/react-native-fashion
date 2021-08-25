import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppAuthContainer from "components/Auth/AppAuthContainer";
import AppAuthFooter from "components/Auth/AppAuthFooter";
import AppText from "components/AppText";
import AppAuthTextInput from "components/Auth/AppAuthTextInput";
import configs from "configs";
import AppCheckbox from "components/AppCheckbox";
import AppButton from "components/AppButton";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid").required("Required").label("Email"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .label("Password"),
});

export default function LoginScreen() {
  return (
    <AppAuthContainer footer={<AppAuthFooter />}>
      <View style={styles.content}>
        <AppText style={styles.title}>Welcome Back</AppText>
        <AppText style={styles.description}>
          Use your credentials below and login to your account
        </AppText>
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          validationSchema={loginSchema}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <View>
              <View style={styles.input}>
                <AppAuthTextInput
                  icon="mail"
                  placeholder="Enter Your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors["email"]}
                  touched={touched["email"]}
                />
              </View>
              <View style={styles.input}>
                <AppAuthTextInput
                  icon="lock"
                  placeholder="Enter Your Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors["password"]}
                  touched={touched["password"]}
                />
              </View>
              <View style={styles.checkbox}>
                <AppCheckbox
                  label="Remember me"
                  checked={values["remember"]}
                  onChange={() =>
                    setFieldValue("remember", !values["remember"])
                  }
                />
                <AppButton variant="transparent">
                  <AppText style={{ color: configs.colors.primary }}>
                    Forgot Password?
                  </AppText>
                </AppButton>
              </View>
              <View style={styles.button}>
                <AppButton
                  variant="primary"
                  label="Log into your account"
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
    marginTop: configs.spacing.m,
  },
  content: {
    padding: 24,
  },
  checkbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    textAlign: "center",
    color: "#0C0D34",
    marginBottom: 24,
  },
});
