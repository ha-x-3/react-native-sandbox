import { createContext, useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
//imports for cart
import { grabOneProduct } from './ShopData';

export const BethanyContext = createContext(null);

export const BethanyProvider = (props) => {
	const router = useRouter();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loggedUser, setLoggedUser] = useState('');
	//State Variables for cart
	const [cartItems, setCartItems] = useState([]);
	const [cartLoaded, setCartLoaded] = useState(false);
	const [ctId, setCtId] = useState(1);
	//Functions for cart

	const toggleCart = () => {
		if (cartLoaded) {
			router.push('/Cart');
		} else {
			Alert.alert('No items in shopping cart');
		}
	};

	const addToCart = (productId) => {
		const product = grabOneProduct(productId);
		setCtId(ctId + 1);
		setCartItems([
			...cartItems,
			{
				cartId: ctId,
				id: product.productId,
				productName: product.productName,
				productPrice: product.productPrice,
				quantity: 1,
			},
		]);
		setCartLoaded(true);
		console.log('Added to cart: ', cartItems);
		Alert.alert('Added to cart: ', product.productName);
	};

	const getCartCount = () => {
		return cartItems.reduce((total, prod) => total + prod.quantity, 0);
	};

	const getCartTotal = () => {
		return cartItems.reduce((total, prod) => total + prod.productPrice, 0);
	};

	const cancelOrder = () => {
		setCartItems([]);
	};

	const processOrder = () => {
		let tmpTotal = Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(getCartTotal());
		Alert.alert('Order amount: ', `${tmpTotal}`);
		setCartItems([]);
	};

	const removeItem = (ctId) => {
		setCartItems(cartItems.filter((product) => product.cartId !== ctId));
	};

	const checkCart = () => {
		if (cartItems.length === 0) {
			setCartLoaded(false);
			router.replace('/');
		}
	};

	//end of additions for cart

	const toggleLogin = () => {
		if (isLoggedIn) {
			AsyncStorage.setItem('userLoggedIn', 'none', () => {
				setIsLoggedIn(false);
				setLoggedUser('');
				Alert.alert('User logged out');
			});
		} else {
			router.push('/Login');
		}
	};

	const getUser = () => {
		AsyncStorage.getItem('userLoggedIn', (err, result) => {
			if (result === 'none') {
				console.log('No one logged in');
			} else if (result === null) {
				AsyncStorage.setItem('userLoggedIn', 'none', () => {
					console.log('Set user to NONE');
				});
			} else {
				setIsLoggedIn(true);
				setLoggedUser(result);
				console.log('logged in user: ', loggedUser);
				console.log('Watching : ', isLoggedIn);
			}
		});
	};

	return (
		<BethanyContext.Provider
			value={{
				toggleLogin,
				getUser,
				isLoggedIn,
				setIsLoggedIn,
				loggedUser,
				cartItems,
				cartLoaded,
				toggleCart,
				addToCart,
				getCartCount,
				getCartTotal,
				setCartItems,
				cancelOrder,
				processOrder,
				removeItem,
				checkCart,
			}}
		>
			{props.children}
		</BethanyContext.Provider>
	);
};
