import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	Dimensions,
	Platform,
} from 'react-native';
import { useEffect, useState, useContext } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { grabOneProduct } from './ShopData';
import { BethanyContext } from './BethanyContext';

const boundedHeight = Dimensions.get('window').height;

const ProductDetail = () => {
	const router = useRouter();
	const { selectedProduct } = useLocalSearchParams();
	const [product, loadProduct] = useState({});

	const { addToCart } = useContext(BethanyContext);

	useEffect(() => {
		loadProduct(grabOneProduct(selectedProduct));
	}, []);

	return (
		<View style={styles.container}>
			<ScrollView>
				<Image source={product.productImage} style={styles.prImage} />
				<View style={styles.addButton}>
					<Text
						style={styles.addText}
						onPress={() => {
							addToCart(product.productId);
						}}
					>
						+ ADD TO CART
					</Text>
				</View>
				<View style={styles.product}>
					<Text style={styles.prTitle}>{product.productName}</Text>
					<Text style={styles.prTitle}>$ {product.productPrice}</Text>
				</View>
				<Text style={styles.prContent}>{product.productDescription}</Text>
				<Text
					style={styles.prBack}
					onPress={() => {
						router.back();
					}}
				>
					GO BACK TO ALL PRODUCTS
				</Text>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: boundedHeight,
		...Platform.select({
			android: {
				paddingBottom: 170,
				paddingTop: 20,
			},
			ios: {
				paddingBottom: 170,
				paddingTop: 20,
			},
			default: {
				paddingTop: 20,
			},
		}),
	},
	prImage: {
		width: '100%',
		...Platform.select({
			android: {
				height: 250,
			},
			ios: {
				height: 250,
			},
			default: {
				height: 500,
				resizeMode: 'cover',
			},
		}),
	},
	addButton: {
		backgroundColor: '#ffcec7',
		height: 50,
		justifyContent: 'center',
		width: '100%',
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
	prTitle: {
		fontFamily: 'WorkSans-Regular',
		fontWeight: '700',
		...Platform.select({
			android: {
				fontSize: 22,
				paddingTop: 12,
				paddingHorizontal: 10,
			},
			ios: {
				fontSize: 22,
				paddingTop: 12,
				paddingHorizontal: 10,
			},
			default: {
				fontSize: 24,
				paddingVertical: 24,
			},
		}),
	},
	prContent: {
		textAlign: 'justify',
		fontFamily: 'WorkSans-Regular',
		fontWeight: '400',
		...Platform.select({
			android: {
				fontSize: 18,
				paddingTop: 15,
				paddingHorizontal: 40,
			},
			ios: {
				fontSize: 18,
				paddingTop: 15,
				paddingHorizontal: 40,
			},
			default: {
				fontSize: 20,
				paddingTop: 15,
				paddingHorizontal: 400,
			},
		}),
	},
	prBack: {
		fontFamily: 'WorkSans-Regular',
		fontWeight: '700',
		textAlign: 'center',
		...Platform.select({
			android: {
				fontSize: 20,
				paddingTop: 20,
			},
			ios: {
				fontSize: 16,
				paddingTop: 20,
			},
			default: {
				fontSize: 26,
				paddingTop: 50,
				paddingBottom: 100,
			},
		}),
	},
});

export default ProductDetail;
