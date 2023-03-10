import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { News } from '@screens';
import { RootStackParamList } from './types';
import { MainBottomTabNavigator } from './MainBottomTabNavigator';


const RootStack = createStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <RootStack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="HomeTab" component={MainBottomTabNavigator} />
      <RootStack.Screen name="News" component={News} />
     
    </RootStack.Navigator>
  );
};
