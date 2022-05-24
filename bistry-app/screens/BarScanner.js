import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {StatusBar} from "expo-status-bar";

function BarScanner({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        const tableNumber = parseInt(data);
        if (!isNaN(tableNumber)){
            navigation.navigate("MainScreen", {"tableNumber": tableNumber});
        }
        else {
            Alert.alert(
                "Warning!",
                `Please scan a valid QR Code!`
            )
        }

    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }



    return (
        <>
            <StatusBar style="dark"/>
            <View style={styles.container}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned &&
                <TouchableOpacity
                    style={styles.roundButton}
                    onPress={() => setScanned(false)}
                >
                    <Text >Zeskanuj ponownie</Text>
                </TouchableOpacity>
                }
            </View>
        </>

    );
}

export default BarScanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    roundButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginLeft: 100,
        marginRight: 100,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#ccc',
        opacity: 0.4
    },
});
