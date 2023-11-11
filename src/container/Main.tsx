import React from "react";
import { auth } from "../config/firebase";

import { Alert, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../style/styles";
import UserList from "../components/user/UserList";

const MainScreen = ({ navigation }: { navigation: any }) => {
  const user = auth.currentUser;

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <UserList />
    </SafeAreaView>
  );
};

export default MainScreen;
