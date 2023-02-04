import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from 'navigation/types';

export const useLoginHelper = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const navigateForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const navigateFacebook = () => {
    navigation.navigate('FacebookSignIn');
  };

  const navigateGoogle = () => {
    navigation.navigate('GoogleSignIn');
  };

  const navigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  return {
    navigateForgotPassword,
    navigateFacebook,
    navigateGoogle,
    navigateSignUp,
  };
};
