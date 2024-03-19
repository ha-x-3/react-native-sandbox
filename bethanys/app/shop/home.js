import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import { useRouter } from 'expo-router';
import products from './shopDB';

const Shop = () => {
    const router = useRouter();

    const ShopItem = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    router.push({
                        pathname: '/shop/productDetail',
                        params: {selectedProduct: item.itemId}
                    });
                }}
            >
            <View style={styles.items}>
                <View style={styles.titleRow}>
                    <Text style={styles.itemName}>
                        {item.itemName}
                    </Text>
                </View>
                <View style={styles.imageRow}>
                    <Image 
                        style={styles.itemImage}
                        source={item.itemImage}
                    />
                </View>
                <View style={styles.textRow}>
                    <Text style={styles.shortDescription}>
                        {item.shortDescription}
                    </Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={ShopItem}
                keyExtractor={(item) => item.itemId}
            ></FlatList>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 14
    },
    items: {
        flex: 1,
        borderBottomWidth: 2
    },
    imageRow: {
        flex: 1
    },
    titleRow: {
        flex: 2,
        paddingTop: 5
    },
    textRow: {
        flex: 2,
        paddingBottom: 20
    },
    itemImage: {
        height: 180,
        width: '100%'
    },
    itemName: {
        textAlign: 'center',
        fontFamily: 'RobotoCondensed-Regular',
        fontWeight: 'bold',
        fontSize: 15
    },
    shortDescription: {
        textAlign: 'center',
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 12
    }
});

export default Shop;