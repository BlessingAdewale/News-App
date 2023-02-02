import { useNavigation } from '@react-navigation/native';
import { SignUpScreenNavigationProp } from 'navigation/types';

export const useSignUpHelper = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  return {
    navigateLogin,
  };
};
