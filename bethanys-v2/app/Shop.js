import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import { useEffect, useState } from 'react';
import { grabAllProducts } from './ShopData';
import ShopItem from '../components/ShopItem';

const Shop = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        setAllProducts(grabAllProducts());
        console.log(grabAllProducts());
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>SHOP</Text>
            <FlatList
                data={allProducts}
                renderItem={({ item }) => <ShopItem {...item} />}
                keyExtractor={(item) => item.productId}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 290,
    },
    pageTitle: {
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular',
        fontWeight: '800',
        ...Platform.select({
            android: {
                fontSize: 26,
                paddingBottom: 10,
            },
            ios: {
                fontSize: 26,
                paddingBottom: 10,
            },
            default: {
                fontSize: 32,
                paddingBottom: 20,
            },
        }),
    },
});

export default Shop;