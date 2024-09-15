import React from "react";
import { Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "../screens/Contacts";
import Profile from "../screens/Profile";
import Favorites from "../screens/Favorites";
import User from "../screens/User";
import Options from "../screens/Options";
import CallScreen from "../screens/Call2";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../utils/colors";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const getTabBarIcon = (icon, color) => ({ focused }) => (
  <MaterialIcons name={icon} size={26} style={{ color: focused ? color : colors.gray }} />
);
const Stack = createNativeStackNavigator();
const ContactsScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{ title: "Contacts" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => {
          const { contact } = route.params;
          const { name } = contact;
          return {
            title: name.split(" ")[0],
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.blue,
            },
          };
        }}
      />
      {/* <Stack.Screen
        name="Call"
        component={CallScreens}
        
        // options={({ route }) => {
        //   const { contact } = route.params;
        // }}
      /> */}
    </Stack.Navigator>
  );
};
const FavoritesScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};
const UserScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerTitle: "Me",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={24}
              style={{ color: "white", marginRight: 10 }}
              onPress={() => navigation.navigate("Options")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Options"
        component={Options}
        options={{ title: "Options" }}
      />
    </Stack.Navigator>
  );
};
const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ContactsScreens"
        barStyle={{ backgroundColor: "white" }}
        labeled={false}
        activeTintColor={colors.red} 
        inactiveColor={colors.gray} 
      >
        <Tab.Screen
          name="ContactsScreens"
          component={ContactsScreens}
          options={{
            tabBarIcon: getTabBarIcon("list", colors.blue ),
           
          }}
          
        />
        <Tab.Screen
          name="FavoritesScreens"
          component={FavoritesScreens}
          options={{
            tabBarIcon: getTabBarIcon("star",colors.blue),
          }}
        />
        <Tab.Screen
          name="UserScreens"
          component={UserScreens}
          options={{
            tabBarIcon: getTabBarIcon("person",colors.blue),
          }}
         
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default TabNavigator;

const CallScreens = () => {
  Linking.openURL(`tel:*101\#`);
};
