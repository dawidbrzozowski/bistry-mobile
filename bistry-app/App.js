import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {StatusBar} from "expo-status-bar";
import OutlinedButton from "./components/UI/OutlinedButton";
import BarScanner from "./components/qrcode/BarScanner";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Bistry | Witaj w restauracji</Text>
            <Button
                title="Zeskanuj kod QR!"
                onPress={() => navigation.navigate('QRCodeScanner')}
            />
        </View>
    );
}


export default function App() {

const Stack = createNativeStackNavigator();

  return (
      <>
        <StatusBar style="dark"/>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="QRCodeScanner" component={BarScanner}/>
              </Stack.Navigator>
          </NavigationContainer>
      </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});