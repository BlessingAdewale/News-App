import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import { layout } from '@utils';
import { globalStyles } from '@globalStyles';
import { HomeTabScreenNavigationProp, IStatusItem, INews } from 'navigation/types';


const STATUS_BOX_HEIGHT = layout.heightPixel(15);
const STATUS_BOX_FOOTER = layout.heightPixel(15);
const STATUS_BOX_MARGIN_RIGHT = layout.pixelSizeHorizontal(5);

export const NewsStories = () => {
  const { width } = useWindowDimensions();
  const calcWidth = width - globalStyles.container.paddingHorizontal * 2;
  const navigation = useNavigation<HomeTabScreenNavigationProp>();

  const handlePress = (status: IStatusItem) => {
    navigation.navigate('StatusItem', {
      ...status,
    });
  };

  const data = [
    {
      id: '1',
      category: 'Science',
      uri: 'https://images.unsplash.com/photo-1593955808003-93f6151e6028?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800',
    },
    {
      id: '2',
      category: 'Art',
      uri: 'https://images.unsplash.com/photo-1547580134-a523397c723c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800',
    },
    {
      id: '3',
      category: 'Auto',
      uri: 'https://images.unsplash.com/photo-1554871037-99938249e220?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800',
    },

    {
      id: '4',
      category: 'Space',
      uri: 'https://images.unsplash.com/photo-1554871037-99938249e220?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800',
    },

    {
      id: '5',
      category: 'Fashion',
      uri: 'https://images.unsplash.com/photo-1554871037-99938249e220?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800',
    },

    {
      id: '6',
      category: 'Education',
      uri: 'https://images.unsplash.com/photo-1554871037-99938249e220?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800',
    },
  ];

  return (
    <View>
      <Text>This is NewsStories</Text>
    </View>
  );
};


const styles = StyleSheet.create({});
