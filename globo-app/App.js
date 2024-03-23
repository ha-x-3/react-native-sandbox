import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './Header';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
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
      >
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
  
}