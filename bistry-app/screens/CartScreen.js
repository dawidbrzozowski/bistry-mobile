import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Button} from 'react-native';
import MenuItem from "../components/MenuItem";
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
        navigation.setOptions({headerTitle: "Koszyk dla stolika numer " + tableNumber});
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
            <Button title={"Dokonaj płatności: "+ data.reduce((a, b) => a + (b["price"] || 0), 0)} onPress={() => alert("Dokonano płatność!")}/>
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
