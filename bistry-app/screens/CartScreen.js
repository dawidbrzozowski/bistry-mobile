import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Text, View, Button, TouchableOpacity} from 'react-native';
import MenuCartItem from "../components/MenuCartItem";


export default function CartScreen({route, navigation}) {
    const tableNumber = route.params.tableNumber;
    const order = route.params.order;


    useEffect(() => {
        navigation.setOptions({headerTitle: "Koszyk #" + tableNumber});
    }, []);

    function renderMenuItem(itemData){
        const menuItem = itemData.item;

        const menuItemProps= {
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
        }
        return <MenuCartItem {...menuItemProps}/>;

    }

    const handlePayment = () => {
        // If one would use some Payment API i.e. Stripe, the code would belong here.
        alert("Opłacono zamówienie")
    }


    return (
        <View style={styles.container}>
            <FlatList
                    data={order}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMenuItem}
            />
            <TouchableOpacity
                style={styles.specialActionButton}
                onPress={() => handlePayment()}
            >
                <Text >{"Dokonaj płatności: "+ order.reduce((a, b) => a + (b["price"] || 0), 0) + ",00"}</Text>
            </TouchableOpacity>
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
    specialActionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        opacity: 0.6,
        backgroundColor: "green",
        marginTop: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        height: 40,
        width: '72%',
        marginBottom: 10,
        marginRight: 2,
        marginLeft: 2
    },
});
