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


    return (
        <View style={styles.menuItem}>
            <View style={styles.innerContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    );
}

export default MenuCartItem;

const styles = StyleSheet.create({
    menuItem: {
        flex: 1,
        marginTop: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        flexDirection: 'row'
    },
    name: {
        fontSize: 16,
        margin: 2,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 2,
    },
});