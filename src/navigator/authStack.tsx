import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUp from "../container/SignUp";
import SignIn from "../container/SignIn";
import WellCome from "../container/WellCome";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="WellCome" component={WellCome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
