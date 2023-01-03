import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Home, Location, Profile } from '@screens';
import { MainBottomTabParamList } from './types';
import { colors } from '@constants';


const MainBottomTab = createMaterialBottomTabNavigator<MainBottomTabParamList>();

export const MainBottomTabNavigator = () => {

return (
    <MainBottomTab.Navigator
      screenOptions={{}}
      labeled={false}
      barStyle={{}}
    //   activeColor={}
    //   inactiveColor={}
    >
        <MainBottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'grid' : 'grid-outline'} size={20} color={color} />
          ),
        }}
      />

       <MainBottomTab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'grid' : 'grid-outline'} size={20} color={color} />
          ),
        }}
      />

     <MainBottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'grid' : 'grid-outline'} size={20} color={color} />
          ),
        }}
      />

    </MainBottomTab.Navigator>
)

}