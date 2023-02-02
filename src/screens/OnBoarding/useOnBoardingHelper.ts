import { useNavigation } from '@react-navigation/native';
import { OnBoardingScreenNavigationProp } from 'navigation/types';

export const useOnBoardingHelper = () => {
  const navigation = useNavigation<OnBoardingScreenNavigationProp>();

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  const navigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  return {
    navigateLogin,
    navigateSignUp,
  };
};
