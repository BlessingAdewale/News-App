import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { ForgotPassword, GoogleSignIn, Login, SignUp, FacebookSignIn } from '@auth';
import { Onboarding } from '@screens';

import { AuthStackParamList } from './types';


const AuthStack = createStackNavigator<AuthStackParamList>();

export function AuthStackNavigator() {
  const navigation = useNavigation();
  return (
    <AuthStack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="OnBoarding" component={Onboarding} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="GoogleSignIn" component={GoogleSignIn} />
      <AuthStack.Screen name="FacebookSignIn" component={FacebookSignIn} />

    </AuthStack.Navigator>
  );
}
