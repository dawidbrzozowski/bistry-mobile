import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import OutlinedButton from "../components/UI/OutlinedButton";



export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Bistry | Witaj w restauracji</Text>
            <OutlinedButton icon='camera' onPress={() => navigation.navigate("QRCodeScanner")}>
                Zeskanuj kod QR!
            </OutlinedButton>
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
