import React, { useState } from "react";
import { auth } from "../config/firebase";

import {
  Alert,
  Button,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../style/styles";

const MainScreen = ({ navigation }: { navigation: any }) => {
  const user = auth.currentUser;

  const signOut = async () => {
    await auth.signOut();
  };

  const Modal = () => {
    Alert.alert("Chat App", "Do you really want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel"),
        style: "cancel",
      },
      { text: "Logout", onPress: signOut },
    ]);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity onPress={() => navigation.push("Chat")}>
        <Text>Go to Chat</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainScreen;
