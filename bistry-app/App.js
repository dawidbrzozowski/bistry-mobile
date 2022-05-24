import React from 'react';
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
                    name="Home"
                    options={{
                        title: "",
                        headerStyle: {
                        backgroundColor: '#fcfcfc'
                        }
                    }}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="QRCodeScanner"
                    options={{
                        title: "Zeskanuj stolik",
                        headerBackTitle: "Cofnij",
                        headerStyle: {
                            backgroundColor: '#fcfcfc'
                        }
                    }}
                    component={BarScanner}
                />
                <Stack.Screen name="MainScreen" component={MainScreen}
                              options={{
                                  headerBackTitle: "Cofnij",
                                  headerStyle: {
                                      backgroundColor: '#fcfcfc'
                                  }}}
                />
                <Stack.Screen name="CartScreen"
                              options={{title: "Koszyk", headerBackTitle: "Cofnij"}}
                              component={CartScreen}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}
