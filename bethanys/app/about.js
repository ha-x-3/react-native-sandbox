import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
    return (
        <>
            <View style={StyleSheet.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 38.919180,
                        longitude: -90.138000,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    provider={PROVIDER_GOOGLE}
                ></MapView>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.heading}>The Greatest Pies in the World!</Text>
                <Text style={styles.content}>Welcome to Bethany's Pie Shop where we bake the best pies in the world.</Text>
                <Text style={styles.address}>Located at 1313 Mockingbird Lane, Suite B</Text>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    mapContainer: {
        flex: 8
    },
    map: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        flex: 5,
        paddingTop: 10
    },
    heading: {
        fontSize: 15,
        fontFamily: 'RobotoCondensed-Regular',
        paddingLeft: 3
    },
    content: {
        paddingTop: 8,
        paddingLeft: 3,
        fontFamily: 'RobotoCondensed-Regular'
    },
    address: {
        paddingTop: 10,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensed-Regular'
    }
});

export default About;