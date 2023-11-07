import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Image, Text } from "react-native";
import styles from "../style/styles";

import { SafeAreaView } from "react-native-safe-area-context";
import createUserEmailAndPassword from "../hooks/createUserEmail";
import { Formik } from "formik";
import * as yup from "yup";
import TextError from "../commons/TextError";

const SignUp = ({ navigation }: { navigation: any }) => {
  const signUpValiation = yup.object().shape({
    email: yup
      .string()
      .email("Please enter correct email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[!@#$%^&.*])(?=.*[A-Z])/,
        "Password must contain one special character and one uppercase character"
      )
      .min(6, "Password must be least 6 character")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Confirm password must match password")
      .required("Confirm password is required"),
    phoneNumber: yup
      .string()
      .min(10, "Must be exactly 10 digit")
      .required("Phone Number is required"),
  });

  const signUp = (email: string, password: string) => {
    const user = createUserEmailAndPassword(email, password);
    console.log(user);
  };

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewLogo}>
        <Image
          source={{
            uri: `https://firebasestorage.googleapis.com/v0/b/message-app-b0e83.appspot.com/o/DH-Hoa-Sen-Main-Icon.png?alt=media&token=e67fe95b-65cd-4059-91c8-bc8f00c68a29&_gl=1*10cuo6s*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5ODkzMDMwMi4xMi4xLjE2OTg5MzA2MTkuNTMuMC4w`,
          }}
          style={styles.logo}
        />
      </View>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          phoneNumber: "",
        }}
        validationSchema={signUpValiation}
        onSubmit={(values) => signUp(values.email, values.password)}
      >
        {({ handleChange, handleSubmit, handleBlur, values, errors }) => (
          <View style={styles.viewCenter}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {errors.email && <TextError message={`${errors.email}`} />}
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            {errors.password && <TextError message={`${errors.password}`} />}
            <TextInput
              style={styles.input}
              placeholder="Password Confirm"
              secureTextEntry
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
            />
            {errors.confirmPassword && (
              <TextError message={`${errors.confirmPassword}`} />
            )}
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="numeric"
              value={values.phoneNumber}
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phhoneNumber")}
            />
            {errors.phoneNumber && (
              <TextError message={`${errors.phoneNumber}`} />
            )}
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.textButton}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <View>
        <Text style={styles.textInfo}>
          Have a account?
          <Text
            style={styles.textNav}
            onPress={() => navigation.push("SignIn")}
          >
            {" "}
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
