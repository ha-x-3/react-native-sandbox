import { StyleSheet, View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Header = () => {

    const logo = require('../assets/bethanys-pie-shop-logo_horiz-white.png');
    const router = useRouter();

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
            <Text style={styles.menu}>SHOP</Text>
            <Text 
                style={styles.menu}
                onPress={() => {
                    router.push('/Contact')
                }}
            >
                CONTACT
            </Text>
            <Text style={styles.menu}>REGISTER</Text>
            <AntDesign style={styles.menu} name='user' size={24} color='white' />
            <Feather style={styles.menu} name='shopping-cart' size={24} color='white' />
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
        flexDirection: 'row'
    },
    logoStyle: {
        height: 30,
        width: 95,
        marginRight: 5,
        marginLeft: 10
    },
    menu: {
        paddingLeft: 8,
        paddingRight: 8,
        color: '#ffffff',
        fontFamily: 'WorkSans-Regular',
        fontWeight: '700'
    }
});

export default Header;