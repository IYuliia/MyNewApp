import 'react-native-gesture-handler';
import { ActivityIndicator, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import StackNavigator from './navigation/StackNavigator';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular' : require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Light' : require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium' : require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold' : require('./assets/fonts/Roboto-Bold.ttf')
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <StackNavigator />
    </NavigationContainer>
  </GestureHandlerRootView>
  );
}

