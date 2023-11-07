import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Pressable, Text } from "react-native";

import colors from "../../assets/color/color";
import styles from "../style/styles";

const WellCome = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <LinearGradient
        colors={[colors.background, colors.white]}
        style={{ flex: 1, borderRadius: 20 }}
      >
        <View
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 12,
            marginRight: 16,
            marginLeft: 16,
          }}
        >
          <Text>WellCome to Message app!!!</Text>
          <Text>My name is Nguyen Gia Son, developer of this app</Text>
          <View style={styles.viewCenter}>
            <Pressable style={styles.button}>
              <Text onPress={() => navigation.push("SignIn")}>Sign In</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text onPress={() => navigation.push("SignUp")}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default WellCome;
