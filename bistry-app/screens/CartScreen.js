import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Button, TouchableOpacity} from 'react-native';
import MenuCartItem from "../components/MenuCartItem";


export default function CartScreen({route, navigation}) {
    const tableNumber = route.params.tableNumber;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const apiUrl = "https://bistry-api.azurewebsites.net/menuitems"; // tu podmiana na api z zamówieniem dla danego stolika


    const getCart = async () => {
        try {
            const response = await fetch(apiUrl);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        navigation.setOptions({headerTitle: "Koszyk #" + tableNumber});
        getCart();
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


    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMenuItem}
                />
            )}
            <TouchableOpacity
                style={styles.specialActionButton}
                onPress={() => alert("Dokonano płatności!")}
            >
                <Text >{"Dokonaj płatności: "+ data.reduce((a, b) => a + (b["price"] || 0), 0) + ",00"}</Text>
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
