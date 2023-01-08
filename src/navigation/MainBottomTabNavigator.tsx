import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Home, Location, Profile } from '@screens';
import { MainBottomTabParamList } from './types';
import { colors } from '@constants';


const MainBottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigator = () => {
  return (
    <MainBottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primaryWhite,
        tabBarInactiveTintColor: colors.primaryLightBlack,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: 100,
          backgroundColor: colors.primaryWhite,
        },
        // tabBarBackground
      }}
    >
      <MainBottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'home-outline' : 'home-outline'}
              size={30}
              color={color}
            />
          ),
        }}
      />

      <MainBottomTab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'map-marker-outline' : 'map-marker-outline'}
              size={30}
              color={color}
            />
          ),
        }}
      />

      <MainBottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Octicons name={focused ? 'person' : 'person'} size={30} color={color} />
          ),
        }}
      />
    </MainBottomTab.Navigator>
  );
};
