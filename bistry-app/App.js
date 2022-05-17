import React from 'react';
import {StyleSheet, Button, Text} from 'react-native';
import BarScanner from "./screens/BarScanner";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from "./screens/HomeScreen";
import MainScreen from "./screens/MainScreen";
import CartScreen from "./screens/CartScreen";


export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home" options={{title: "Ekran powitalny"}} component={HomeScreen}/>
                <Stack.Screen name="QRCodeScanner" options={{title: "Zeskanuj stolik"}} component={BarScanner}/>
                <Stack.Screen name="MainScreen" component={MainScreen}
                              // options={({navigation, route})=>({
                              //     headerRight: () => (
                              //         <Button
                              //             onPress={() => navigation.navigate("CartScreen")}
                              //             title="Cart"
                              //             color="#00cc00"
                              //         />
                              //     ),
                              // })}
                />
                <Stack.Screen name="CartScreen" options={{title: "Koszyk"}} component={CartScreen}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}
