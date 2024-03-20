import { useState } from "react";
import { StyleSheet,
        Text,
        View,
        Image,
        TextInput,
        TouchableOpacity,
        Alert
} from "react-native-web";
import { useSearchParams, useRouter } from 'expo-router';
import products from "./shopDB";

const ProductDetail = () => {
    const [quantity, onChangeQuantity] = useState('1');
    const router = useRouter();
    const { selectedProduct } = useSearchParams();
    const displayProduct = products.find(
        products => products.itemId === selectedProduct
    );

    const placeOrder = () => {
        let price = displayProduct.price * quantity;
        Alert.alert(
            `Your order will be ${price} dollars. You will be contacted by staff shortly.`
        );
        router.push('/shop/home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.nameView}>
                <Text style={styles.itemName}>
                    {displayProduct.itemName}
                </Text>
            </View>
            <View style={styles.productView}>
                <Image 
                    source={displayProduct.itemImage}
                    style={styles.projectImage}
                />
            </View>
            <View style={styles.descriptionView}>
                <Text style={styles.description}>
                    {displayProduct.description}
                </Text>
                <Text style={styles.price}>
                    Total Price: ${displayProduct.price * quantity}
                </Text>
            </View>
            <View style={styles.quantityView}>
                <Text style={styles.description}>Quantity:</Text>
                <TextInput 
                    style={styles.input}
                    onChange={onChangeQuantity}
                    value={quantity}
                    keyboardType='numeric'
                    selectedTextOnFocus={true}
                />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={placeOrder}
                    style={styles.order}
                >
                    <Text style={styles.description}>Place Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        router.back();
                    }}
                    style={goBack}
                >
                    <Text style={styles.description}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 13,
    },
    nameView: {
        flex: 1
    },
    itemName: {
        fontFamily: 'RobotoCondensed-Regular',
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 5
    },
    productView: {
        flex: 4
    },
    productImage: {
        height: '100%',
        width: '100%'
    },
    descriptionView: {
        flex: 2
    },
    description: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 14,
        paddingLeft: 5,
        paddingTop: 5
    },
    price: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 16,
        paddingLeft: 5,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    quantityView: {
        flex: 2,
        alignItems: 'center'
    },
    input: {
        height: 38,
        width: 60,
        borderWidth: 1,
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 14,
        textAlign: 'center'
    },
    buttonView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    order: {
        backgroundColor: 'green',
        borderWidth: 1,
        marginBottom: 10
    },
    goBack: {
        backgroundColor: 'red',
        borderWidth: 1,
        marginBottom: 10
    }
});

export default ProductDetail;