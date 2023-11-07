import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../style/styles";

import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import signInuserEmailAndPassword from "../hooks/signInUserEmail";
import * as yup from "yup";
import TextError from "../commons/TextError";

const SignIn = ({ navigation }: { navigation: any }) => {
  const signInValidation = yup.object().shape({
    email: yup
      .string()
      .email("Please enter correct email")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const signIn = (email: string, password: string) => {
    const user = signInuserEmailAndPassword(email, password);
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
        initialValues={{ email: "", password: "" }}
        validationSchema={signInValidation}
        onSubmit={(values) => signIn(values.email, values.password)}
      >
        {({ handleChange, handleSubmit, handleBlur, values, errors }) => (
          <View style={styles.viewCenter}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              keyboardType="email-address"
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

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.textButton}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View>
        <Text style={styles.textInfo}>
          Are you new here?
          <Text
            style={styles.textNav}
            onPress={() => navigation.push("SignUp")}
          >
            {" "}
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
