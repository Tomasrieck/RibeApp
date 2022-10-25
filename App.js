import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import AktivitetScreen from "./screens/AktivitetScreen";
import KulturScreen from "./screens/KulturScreen";
import OvernatningScreen from "./screens/OvernatningScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AktivitetScreen"
          component={AktivitetScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="KulturScreen"
          component={KulturScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OvernatningScreen"
          component={OvernatningScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
