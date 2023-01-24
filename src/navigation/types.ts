import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export interface IStatus {
  id: string;
  uri: string;
  category: string;
  news: string;
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
}

export type RootStackParamList = {
  HomeTab: undefined;
  News: undefined;
};

export type MainBottomTabParamList = {
  Home: undefined;
  Location: undefined;
  Profile: undefined;
};

export type HomeTabScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeTab'>;
export type NewsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'News'>;
export type NewsScreenRouteProp = RouteProp<RootStackParamList, 'News'>;
