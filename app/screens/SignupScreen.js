import React, { useRef } from "react";
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

const signupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid").required("Required").label("Email"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .label("Password"),
  confirmPassword: Yup.string()
    .equals([Yup.ref("password")], "Password's not match")
    .required(),
});

export default function SignupScreen({ navigation }) {
  const password = useRef(null);
  const confirmPassword = useRef(null);
  return (
    <AppAuthContainer
      footer={
        <AppAuthFooter
          title="Already have an account? "
          action="Login here"
          onPress={() => navigation.navigate("LoginScreen")}
        />
      }>
      <View style={styles.content}>
        <AppText style={styles.title}>Create account</AppText>
        <AppText style={styles.description}>
          Let’s us know what your name, email, and your password
        </AppText>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={signupSchema}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
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
                  autoCompleteType="email"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onSubmitEditing={() => password.current?.focus()}
                />
              </View>
              <View style={styles.input}>
                <AppAuthTextInput
                  ref={password}
                  icon="lock"
                  placeholder="Enter Your Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors["password"]}
                  touched={touched["password"]}
                  autoCompleteType="password"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onSubmitEditing={() => confirmPassword.current?.focus()}
                  secureTextEntry
                />
              </View>
              <View style={styles.input}>
                <AppAuthTextInput
                  ref={confirmPassword}
                  icon="lock"
                  placeholder="Confirm Your Password"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  error={errors["confirmPassword"]}
                  touched={touched["confirmPassword"]}
                  autoCompleteType="password"
                  autoCapitalize="none"
                  returnKeyType="go"
                  returnKeyLabel="go"
                  onSubmitEditing={() => handleSubmit()}
                  secureTextEntry
                />
              </View>
              <View style={styles.button}>
                <AppButton
                  variant="primary"
                  label="Create your account"
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
