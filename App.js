import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'Poppins-Regular': require('./src/assets/fonts/Poppins/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./src/assets/fonts/Poppins/Poppins-Bold.ttf'),
      'Poppins-SemiBold': require('./src/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
      'Poppins-Italic': require('./src/assets/fonts/Poppins/Poppins-Italic.ttf'),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AppNavigator />;
}