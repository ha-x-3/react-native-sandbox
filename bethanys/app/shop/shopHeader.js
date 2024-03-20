import { StyleSheet, View, Image } from "react-native";

const ShopHeader = () => {
    
    const logo = require('../../assets/images/bethanys-pie-shop-logo_logomark-black.png');

    return (
        <View style={styles.header}>
            <Image source={logo} style={styles.logoStyle} />
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 55
    },
    logoStyle: {
        flex: 1,
        resizeMode: 'contain',
        height: 20,
        width: 40
    }
});

export default ShopHeader;