import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Button, TouchableOpacity} from 'react-native';
import MenuItem from "../components/MenuItem";


export default function MainScreen({route, navigation}) {
    const tableNumber = route.params.tableNumber;
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
        navigation.setOptions({headerTitle: "Stolik #" + tableNumber})
        navigation.setOptions({headerRight: () => (
                <Button
                    onPress={() => navigation.navigate("CartScreen", {"tableNumber": tableNumber})}
                    title={"Koszyk"}
                    color="#00cc00"
                />
            )});
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
            <View style={styles.specialActionView}>
                <TouchableOpacity
                    style={{...styles.specialActionButton, borderBottomLeftRadius: 15, backgroundColor: "yellow"}}
                    onPress={() => alert("Wezwano kelnera! Proszę czekać")}>
                    <Text >Wezwij kelnera</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{...styles.specialActionButton, borderBottomRightRadius: 15, backgroundColor: "green"}}
                    onPress={() => alert("Opłacono zamówienie")}>
                    <Text >Opłać zamówienie</Text>
                </TouchableOpacity>
            </View>
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
    specialActionView: {
        flexDirection: 'row',
    },
    specialActionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        opacity: 0.6,
        width: '44%',
        marginTop: 10,
        height: 40,
        marginBottom: 20,
        marginRight: 2,
        marginLeft: 2
    },
});
