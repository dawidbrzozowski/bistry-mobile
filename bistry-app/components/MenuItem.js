import {
    View,
    Pressable,
    Text,
    Image,
    Button,
    StyleSheet,
    Platform, TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from "react";


function MenuItem({
                      dataCallback,
                      id,
                      name,
                      category,
                      price,
                      description,
                  }) {
    const navigation = useNavigation();


    return (
        <View style={styles.menuItem}>
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.description}>{description}</Text>
                        <Text style={styles.price}>{price}</Text>
                    </View>
                </View>
            <View>
                <TouchableOpacity
                    style={styles.addElementSign}
                    onPress={() => dataCallback({
                        id: id,
                        name: name,
                        category: category,
                        price: price,
                        description: description
                    })}
                >
                    <Text >+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default MenuItem;

const styles = StyleSheet.create({
    menuItem: {
        margin: 10,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        flexDirection: 'row'
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        width: '88%'
    },
    name: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    description: {
        fontSize: 14,
        margin: 5,
        textAlign: 'center'
    },
    price: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        margin: 2,
    },
    addElementSign: {
        width: 30,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#00cc00',
        opacity: 0.6,
        marginTop: 30,
        marginBottom: 30
    },
});