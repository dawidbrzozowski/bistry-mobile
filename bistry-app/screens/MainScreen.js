import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Button} from 'react-native';
import MenuItem from "../components/MenuItem";


export default function MainScreen({route, navigation}) {
    const tableNumber = route.params.tableNumber;
    navigation.setOptions({title: "Stolik numer " + tableNumber})
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const apiUrl = "https://bistry-api.azurewebsites.net/menuitems";


    const getMenu = async () => {
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
        getMenu();
    }, []);

    function renderMenuItem(itemData){
        const menuItem = itemData.item;

        const menuItemProps= {
            id: menuItem.id,
            name: menuItem.name,
            category: menuItem.category,
            price: menuItem.price,
            description: menuItem.description
        }
        return <MenuItem {...menuItemProps}/>;

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
            <Button title="Wezwij kelnera" onPress={() => alert("Wezwano kelnera! Proszę czekać")}>
            </Button>
            <Button title="Opłać zamówienie" onPress={() => alert("Opłacono zamówienie")}>
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
