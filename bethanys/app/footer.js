import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const Footer = () => {

    return(
        <View style={styles.footer}>
            <View style={styles.menu}>
                <Link href='/about' style={styles.link}>About</Link>
                <Link href='/about' style={styles.link}>Shop</Link>
                <Link href='/about' style={styles.link}>News</Link>
                <Link href='/about' style={styles.link}>Contact</Link>
            </View>
            <View style={styles.copyRow}>
                <Text style={styles.copyright}>Copr. 2024 Bethanys Pie Shop LLC</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    footer: {
        flex: 2
    },
    menu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    link: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    copyRow: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center'
    },
    copyright: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: 14
    }
});

export default Footer;