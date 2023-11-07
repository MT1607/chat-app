import { auth } from "../config/firebase";

import { SafeAreaView, Image, Alert, Platform, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import colors from "../../assets/color/color";
import styles from "../style/styles";

const SideBar = ({ props }: { props: any }) => {
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.thirty,
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <View style={styles.userCard}>
        <Image
          style={styles.avatarMedium}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/message-app-b0e83.appspot.com/o/20171206_01.jpg?alt=media&token=284bff9a-2dd9-484f-a729-064377464b62&_gl=1*9zui8e*_ga*MTMyOTQzNTY0NS4xNjk3Mjk0MjU5*_ga_CW55HF8NVT*MTY5OTEwMzc3MS4yMi4xLjE2OTkxMDM4NTYuNTEuMC4w",
          }}
        />
        <Text style={{ marginLeft: 10 }}>{user?.email}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Sign Out" onPress={() => Modal()} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default SideBar;
