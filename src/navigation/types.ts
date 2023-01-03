import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';


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
  
