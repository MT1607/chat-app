import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import colors from "../../assets/color/color";
import SideBar from "../components/Sidebar";
import ChatScreen from "../container/Chat";
import MainScreen from "../container/Main";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: colors.white,
        drawerItemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <SideBar props={props} />}
    >
      <Drawer.Screen
        name="Main"
        options={{ drawerLabel: "Message Section", title: "Message Section" }}
        component={MainStack}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
