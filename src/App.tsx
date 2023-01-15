import 'react-native-gesture-handler';
import React from 'react';

import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from './navigation/NavigationContainer';
import { useFontsHelper } from '@hooks';

function App() {
  const { appIsReady } = useFontsHelper();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto"/>
      <NavigationContainer />
      
    </>
  );
}

export default registerRootComponent(App);
