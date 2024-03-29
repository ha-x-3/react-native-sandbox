import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './Header';
import Footer from './Footer';
import { navigationRef } from './RootNavigation';
import * as SplashScreen from 'expo-splash-screen';
import NewsDetail from './NewsDetail';
import AboutGlobo from './About';
import Quotepage from './Quote';
import Catalogpage from './Catalog';
import CatalogDetail from './CatalogDetail';

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
  <NavigationContainer
    style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
    onReady={onLayoutRootView}
    ref={navigationRef}
  >
    <Stack.Navigator 
      initialRouteName='Globomantics'
      screenOptions="header"
    >
      <Stack.Screen
        name="Globomantics"
        component={Homepage}
        options={{
          header: () => <Header headerDisplay="Globomantics" />
        }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          header: () => <Header headerDisplay="News" />
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutGlobo}
        options={{
          header: () => <Header headerDisplay="About Globomantics" />
        }}
      />
      <Stack.Screen
        name="Quote"
        component={Quotepage}
        options={{
          header: () => <Header headerDisplay="Get a Quote" />
        }}
      />
      <Stack.Screen
        name="Catalog"
        component={Catalogpage}
        options={{
          header: () => <Header headerDisplay="Globomantics Robotics" />
        }}
      />
      <Stack.Screen
        name="CatalogDetail"
        component={CatalogDetail}
        options={{
          header: () => <Header headerDisplay="Product Information" />
        }}
      />
      
    </Stack.Navigator>
    <Footer />
  </NavigationContainer>
  );
  
}