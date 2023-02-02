import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from 'navigation/types';

export const useLoginHelper = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const navigateHomeTab = () => {
    navigation.navigate('HomeTab');
  };

  const navigateForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return {
    navigateForgotPassword,
    navigateHomeTab,
  
  };
};
