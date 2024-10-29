import { ActivityIndicator, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';

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
      <RegistrationScreen />
  );
}

