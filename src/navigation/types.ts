import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export interface IStatus {
  id: string;
  uri: string;
  title: string;
  detail: string;
  posted: string;
  viewers: string;
  category: string;
  news: string;
  author: string;
}

export interface INews {
  id: string;
  uri: string;
  title: string;
  detail: string;
  posted: string;
  viewers: string;
  category: string;
  news: string;
  author: string;
}

export type BottomSheetProps = {
  children?: React.ReactNode;
  author: string;
  duration: string;
  article: string;
  image: string;
  authorImage: string;
  viewers: string;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  inActive: () => boolean;
};

export type AuthStackParamList = {
  OnBoarding: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type RootStackParamList = {
  HomeTab: undefined;
  News: undefined;
};

export type MainBottomTabParamList = {
  Home: undefined;
  Location: undefined;
  Profile: undefined;
};

export type ForgotPasswordScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'ForgotPassword'
>;
export type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;
export type SignUpScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'SignUp'>;
export type OnBoardingScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'OnBoarding'>;
export type HomeTabScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeTab'>;
export type NewsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'News'>;
export type NewsScreenRouteProp = RouteProp<RootStackParamList, 'News'>;
