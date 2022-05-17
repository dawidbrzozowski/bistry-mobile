import {
    View,
    Pressable,
    Text,
    Image,
    Button,
    StyleSheet,
    Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


function MenuCartItem({
                      id,
                      name,
                      price
                  }) {
    const navigation = useNavigation();

    function selectMenuItemHandler() {
        // navigation.navigate('MealDetail', {
        //     mealId: id,
        // });
        console.log("MealItemHandler")
    }

    return (
        <View style={styles.menuItem}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => (pressed ? styles.buttonPressed : null)}
                onPress={selectMenuItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.price}>{price}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default MenuCartItem;

const styles = StyleSheet.create({
    menuItem: {
        margin: 3,
        borderRadius: 4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    name: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        margin: 2,
    },
    price: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12,
        margin: 2,
    },
});