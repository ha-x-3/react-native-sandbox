import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableWithoutFeedback,
} from 'react-native';
import { useRouter } from 'expo-router';
import { BethanyContext } from './BethanyContext';
import { useEffect, useContext } from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';

const Header = () => {
	const logo = require('../assets/bethanys-pie-shop-logo_horiz-white.png');
	const router = useRouter();
	const {
		toggleLogin,
		getUser,
		isLoggedIn,
		toggleCart,
		cartLoaded,
		getCartCount,
	} = useContext(BethanyContext);

	useEffect(() => {
		console.log('Contents of cart: ');
		getUser();
	}, [isLoggedIn, cartLoaded]);

	let display = isLoggedIn ? (
		<FontAwesome
			name='user-circle-o'
			size={24}
			color='black'
		/>
	) : (
		<FontAwesome
			name='user-circle-o'
			size={24}
			color='white'
		/>
	);

	let cartDisplay = cartLoaded ? (
		<Feather
			name='shopping-cart'
			size={24}
			color='black'
		/>
	) : (
		<Feather
			name='shopping-cart'
			size={24}
			color='white'
		/>
	);

	return (
		<View style={styles.header}>
			<TouchableWithoutFeedback
				onPress={() => {
					router.replace('/');
				}}
			>
				<Image
					source={logo}
					style={styles.logoStyle}
				/>
			</TouchableWithoutFeedback>
			<Text
				style={styles.menu}
				onPress={() => {
					router.push('/Shop');
				}}
			>
				SHOP
			</Text>
			<Text
				style={styles.menu}
				onPress={() => {
					router.push('/Contact');
				}}
			>
				CONTACT
			</Text>
			<Text
				style={styles.menu}
				onPress={() => {
					router.push('/Register');
				}}
			>
				REGISTER
			</Text>
			<Text
				style={styles.menu}
				onPress={toggleLogin}
			>
				{display}
			</Text>
			<Text
				style={styles.menu}
				onPress={toggleCart}
			>
				{cartDisplay}
				{getCartCount()}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#d77948',
		height: 80,
		width: '100%',
		flexDirection: 'row',
	},
	logoStyle: {
		height: 30,
		width: 95,
		marginRight: 5,
		marginLeft: 10,
	},
	menu: {
		paddingLeft: 8,
		paddingRight: 8,
		color: '#FFFFFF',
		fontFamily: 'WorkSans-Regular',
		fontWeight: '700',
	},
});

export default Header;
