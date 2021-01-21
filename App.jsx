import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, } from 'react-native';
import FirstPage from "./screens/FirstPage"
import {createSwitchNavigator} from 'react-navigation'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, createAppContainer} from "@react-navigation/stack"
import { withNavigation } from 'react-navigation';
import Home from "./screens/Home";
import SecondPage from "./screens/SecondPage";
import ThirdPage from "./screens/ThirdPage";
import Naruto from "./screens/Naruto";
import Deku from "./screens/Deku";
import Light from "./screens/Light";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
        <Stack.Screen name="Naruto" component={Naruto} />
        <Stack.Screen name="Deku" component={Deku} />
        <Stack.Screen name="Light" component={Light} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



