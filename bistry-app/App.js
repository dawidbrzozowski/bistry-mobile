import React from 'react';
import { StyleSheet} from 'react-native';
import BarScanner from "./screens/BarScanner";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from "./screens/HomeScreen";
import MainScreen from "./screens/MainScreen";



export default function App() {

const Stack = createNativeStackNavigator();

  return (
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="QRCodeScanner" component={BarScanner}/>
                  <Stack.Screen name="MainScreen" component={MainScreen}/>
              </Stack.Navigator>
          </NavigationContainer>

  );
}
