import React from 'react';

import { NavigationContainer as BaseNavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './RootStackNavigator';
import { AuthStackNavigator } from './AuthStackNavigator';

export const NavigationContainer = () => {
  const renderContent = () => {
    const isLoggedIn = false;

    if (isLoggedIn) {
      return <RootStackNavigator />;
    }
    return <AuthStackNavigator />;
  };

  return <BaseNavigationContainer>{renderContent()}</BaseNavigationContainer>;
};
