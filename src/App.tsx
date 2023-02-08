import 'react-native-gesture-handler';
import React from 'react';

import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import './config/firebase';
import { NavigationContainer } from './navigation/NavigationContainer';
import { useFontsHelper } from '@hooks';

import { Provider } from 'react-redux';
import { store } from '@redux';

function App() {
  const { appIsReady } = useFontsHelper();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <StatusBar style="light" />
        <NavigationContainer />
      </Provider>
    </>
  );
}

export default registerRootComponent(App);
