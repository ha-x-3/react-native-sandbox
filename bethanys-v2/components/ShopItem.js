import {
    Image,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { BethanyContext } from '../app/BethanyContext';
import { useContext } from 'react';
import { useRouter } from 'expo-router';

const ShopItem = ({ productId, productName, productImage, productPrice }) => {
    const router = useRouter();
    const { addToCart } = useContext(BethanyContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    router.push({
                        pathname: '/ProductDetail',
                        params: { selectedProduct: productId },
                    });
                }}
            >
                <Image source={productImage} style={styles.pieStyle} />
            </TouchableOpacity>
            <View style={styles.addButton}>
                <Text
                    style={styles.addText}
                    onPress={() => {
                        addToCart(productId);
                    }}
                >
                    + ADD TO CART
                </Text>
            </View>
            <View style={styles.product}>
                <Text style={styles.productText}>{productName}</Text>
                <Text style={styles.productText}>$ {productPrice}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 40,
        ...Platform.select({
            android: {
                borderWidth: 1,
            },
            ios: {
                borderWidth: 1,
            },
            default: {
                paddingBottom: 80,
            },
        }),
    },
    pieStyle: {
        resizeMode: 'cover',
        ...Platform.select({
            android: {
                height: 220,
                width: '100%',
            },
            ios: {
                height: 220,
                width: '100%',
            },
            default: {
                width: '100%',
                height: 450,
            },
        }),
    },
    addButton: {
        backgroundColor: '#ffcec7',
        justifyContent: 'center',
        ...Platform.select({
            android: {
                height: 50,
            },
            ios: {
                height: 50,
            },
            default: {
                height: 70,
            },
        }),
    },
    addText: {
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular',
        fontWeight: '900',
        ...Platform.select({
            android: {
                fontSize: 14,
            },
            ios: {
                fontSize: 14,
            },
            default: {
                fontSize: 20,
            },
        }),
    },
    product: {
        flexDirection: 'row',
        ...Platform.select({
            android: {
                justifyContent: 'space-between',
            },
            ios: {
                justifyContent: 'space-between',
            },
            default: {
                justifyContent: 'space-evenly',
            },
        }),
    },
    productText: {
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular',
        fontWeight: '900',
        fontSize: 18,
        textTransform: 'uppercase',
        ...Platform.select({
            android: {
                paddingHorizontal: 10,
            },
            ios: {
                paddingHorizontal: 10,
            },
            default: {
                paddingHorizontal: 30,
            },
        }),
    },
});

export default ShopItem;