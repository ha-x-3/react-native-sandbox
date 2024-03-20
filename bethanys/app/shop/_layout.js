import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import ShopHeader from './shopHeader';
import ShopFooter from './shopFooter';

const ShopLayout = () => {
    return (
        <View style={styles.container}>
            <ShopHeader />
            <Slot />
            <ShopFooter />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ShopLayout;