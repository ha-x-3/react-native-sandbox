import { useEffect, useState, useContext } from 'react';
import {
	View,
	Text,
	Button,
	FlatList,
	StyleSheet,
	Platform,
} from 'react-native';
import { BethanyContext } from './BethanyContext';

const Cart = () => {
	const {
		getCartTotal,
		cartItems,
		cancelOrder,
		processOrder,
		removeItem,
		checkCart,
	} = useContext(BethanyContext);

	const [totalCost, setTotalCost] = useState(0);

	useEffect(() => {
		checkCart();
		setTotalCost(getCartTotal());
	}, [cartItems]);

	const formattedTotal = Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(totalCost);

	const CartItem = ({ cartId, productName, productPrice }) => {
		const itemRemove = () => {
			removeItem(cartId);
		};

		return (
			<View style={styles.ctItem}>
				<Text style={styles.ctText}>{productName}</Text>
				<Text style={styles.ctText}>{productPrice}</Text>
				<Button
					onPress={itemRemove}
					title='REMOVE'
					color='#de0909'
				/>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.pageTitle}>SHOPPING CART</Text>
			<View style={styles.totalRow}>
				<Text style={styles.cartTotal}>TOTAL: {formattedTotal}</Text>
			</View>
			<View style={styles.buttonRow}>
				<Button
					onPress={cancelOrder}
					title='CANCEL ORDER'
					color='#de0909'
				/>
				<Button
					onPress={processOrder}
					title='PLACE ORDER'
					color='#1ed662'
				/>
			</View>
			<FlatList
				data={cartItems}
				renderItem={({ item }) => <CartItem {...item} />}
				keyExtractor={(item) => item.cartId}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingBottom: 400,
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
	ctItem: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '100%',
		alignItems: 'center',
		paddingVertical: 20,
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
	ctText: {
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
	totalRow: {
		width: '100%',
		alignItems: 'center',
		paddingBottom: 30,
	},
	cartTotal: {
		fontSize: 18,
		fontWeight: '700',
	},
	buttonRow: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		width: '100%',
		paddingBottom: 20,
	},
});

export default Cart;
