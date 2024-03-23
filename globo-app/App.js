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

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
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
      
    </Stack.Navigator>
    <Footer />
  </NavigationContainer>
  );
  
}