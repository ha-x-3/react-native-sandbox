import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Slot, usePathname } from 'expo-router';
import { useFonts } from 'expo-font';
import SplashScreen from './splashScreen';
import Header from './header';
import Footer from './footer';

const Layout = () => {
    const pathname = usePathname();

    const [fontsLoaded] = useFonts({
        'RobotoCondensed-Regular': require('../assets/fonts/RobotoCondensed-Regular.ttf'),
        'Alkatra-Regular': require('../assets/fonts/Alkatra-Regular.ttf'),
        'Alkatra-Bold': require('../assets/fonts/Alkatra-Bold.ttf')  
    });

    if (!fontsLoaded) {
        return <SplashScreen />;
    }

    // if (pathname === '/shop/home'||pathname === '/shop/productDetail') {
    //     return( 
    //         <View style={styles.container}>
    //           <Slot />
    //         </View>
    //     );
    // }

    return(
        <View style={styles.container}>
            <StatusBar style="light"/>
            <Header />
            <Slot />
            <Footer />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});

export default Layout;