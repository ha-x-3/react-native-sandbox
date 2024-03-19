import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  const splash = require('../assets/bethanys-splash.png');

    return (
        <View style={styles.container}>
            <Image source={splash} style={styles.splashStyle} />
        </View>
    )
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36302c',
  },
  splashStyle: {
    resizeMode: 'contain'
  }
});

export default SplashScreen;