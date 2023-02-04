import { useNavigation } from '@react-navigation/native';
import { SignUpScreenNavigationProp } from 'navigation/types';
import { useState } from 'react';

export const useSignUpHelper = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  const navigateFacebook = () => {
    navigation.navigate('FacebookSignIn');
  };

  const navigateGoogle = () => {
    navigation.navigate('GoogleSignIn');
  };

  return {
    navigateLogin,
    navigateFacebook,
    navigateGoogle,
  };
};
