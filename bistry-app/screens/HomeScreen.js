import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import OutlinedButton from "../components/UI/OutlinedButton";



export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/bistry.png')}
                style={{width: '80%', height: '16%', margin: 30}}
            />
            <OutlinedButton icon='camera' onPress={() => navigation.navigate("QRCodeScanner")}>
                Zeskanuj kod QR!
            </OutlinedButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc',
        alignItems: 'center',
        justifyContent: 'center',

    },
});
