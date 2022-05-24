import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Button, TouchableOpacity} from 'react-native';
import MenuItem from "../components/MenuItem";


export default function MainScreen({route, navigation}) {
    const tableNumber = route.params.tableNumber;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const apiUrl = "https://bistry-api.azurewebsites.net/";
    const [orders, setOrders] = useState([]);

    const getMenu = async () => {
        try {
            const response = await fetch(apiUrl + "MenuItems");
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
                    onPress={() => navigation.navigate(
                        "CartScreen", {
                            "tableNumber": tableNumber,
                            "order": orders
                        }
                        )
                    }
                    title={"Koszyk"}
                    color="#00cc00"
                />
            )});
        getMenu();
    }, []);

    const dataCallback = (menuItem) => {
        orders.push(menuItem);
    }


    function renderMenuItem(itemData){
        const menuItem = itemData.item;

        const menuItemProps= {
            id: menuItem.id,
            name: menuItem.name,
            category: menuItem.category,
            price: menuItem.price,
            description: menuItem.description
        }
        return <MenuItem dataCallback={dataCallback} {...menuItemProps}/>;

    }

    const handleSendOrder = async (order) => {
        try {
            console.log(order)
            await fetch(apiUrl + "Orders/PlaceOrder", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "tableId": tableNumber,
                    "menuItems": order.map(el => el.name).join(";")
                }
                )
                    .then(response => {if (response.status === 200) alert("Zamówienie w trakcie realizacji!")})
            });
        }
        catch(error) {
            console.log(error)
            alert("Nie udało się przekazać zamówienia. Spróbuj ponownie za chwilę!")
        }
    }

    const handleCallWaiter = async () => {
        try {
            await fetch(apiUrl + "Orders/CallWaiter", {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"table": tableNumber})
                    .then(response => {if (response.status === 200) alert("Wezwano kelnera. Zaraz podejdzie do stolika.")})
            });
        }
        catch(error) {
            alert("Nie udało się wezwać kelnera. Proszę spróbować później!")
        }
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
                    onPress={() => handleCallWaiter()}>
                    <Text >Wezwij kelnera</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{...styles.specialActionButton, borderBottomRightRadius: 15, backgroundColor: "green"}}
                    onPress={() => handleSendOrder(data)}>
                    <Text >Zamów</Text>
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
