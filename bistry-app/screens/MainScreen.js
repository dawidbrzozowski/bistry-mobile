import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import OutlinedButton from "../components/UI/OutlinedButton";



export default function MainScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Wybierz danie!</Text>
            <Button title="Wezwij kelnera" onPress={() => alert("Wezwano kelnera! Proszę czekać")} >
            </Button>
            <Button title="Opłać zamówienie" onPress={() => alert("Opłacono zamówienie")} >
            </Button>
        </View>
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
