import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


function MenuItem({
                      id,
                      name,
                      category,
                      price,
                      description,
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
                        <Text style={styles.description}>{description}</Text>
                        <Text style={styles.price}>{price}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default MenuItem;

const styles = StyleSheet.create({
    menuItem: {
        margin: 16,
        borderRadius: 8,
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
        fontSize: 18,
        margin: 8,
    },
    description: {
        fontSize: 14,
        margin: 2,
        textAlign: 'center'
    },
    price: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        margin: 2,
    },
});