import { Text, View, StyleSheet, Button } from 'react-native';
import {StatusBar} from "expo-status-bar";
import {BarCodeScanner} from "expo-barcode-scanner";
import OutlinedButton from "../components/UI/OutlinedButton";
import BarScanner from "../components/qrcode/BarScanner"

function WelcomeScreen() {

    return (
        <>
            <StatusBar style="dark"/>
            <View style={styles.container}>
                <Text>
                    Bistry | Witaj w restauracji
                </Text>
                <OutlinedButton icon="camera" onPress={BarScanner}
                                Zeskanuj kod QR swojego stolika
                />
                <BarScanner/>
            </View>
        </>

    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});