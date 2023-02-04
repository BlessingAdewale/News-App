import React from 'react';
import { useAuthentication } from '@hooks';
import { NavigationContainer as BaseNavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './RootStackNavigator';
import { AuthStackNavigator } from './AuthStackNavigator';


export const NavigationContainer = () => {
  const renderContent = () => {
    const { user } = useAuthentication();
    return user ? <RootStackNavigator /> : <AuthStackNavigator />;
  };

  return <BaseNavigationContainer>{renderContent()}</BaseNavigationContainer>;
};
