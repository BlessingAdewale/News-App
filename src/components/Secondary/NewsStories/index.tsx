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

const STATUS_BOX_HEIGHT = layout.heightPixel(130);
const STATUS_BOX_FOOTER = layout.heightPixel(15);
const STATUS_BOX_MARGIN_RIGHT = layout.pixelSizeHorizontal(15);

export const NewsStories = () => {
  const { width } = useWindowDimensions();
  const calcWidth = width - globalStyles.container.paddingHorizontal * 5;
  // const navigation = useNavigation<HomeTabScreenNavigationProp>();

  // const handlePress = (status: IStatusItem) => {
  //   navigation.navigate('StatusItem', {
  //     ...status,
  //   });
  // };

  const data = [
    {
      id: '1',
      category: 'Science',
      uri: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: '2',
      category: 'Art',
      uri: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: '3',
      category: 'Auto',
      uri: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },

    {
      id: '4',
      category: 'Space',
      uri: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
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
    <View style={[styles.scrollBox]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ maxHeight: STATUS_BOX_HEIGHT }}
      >
        {data.map((category, index) => {
          return (
            <View
              style={[
                styles.wrap,
                {
                  marginRight: data.length === index + 1 ? 0 : STATUS_BOX_MARGIN_RIGHT,
                  width: calcWidth * 0.25,
                },
              ]}
            >
              <TouchableOpacity activeOpacity={0.7} key={category.id} style={[styles.wrap2]}>
                <View style={[globalStyles.ImageItemOutline, styles.wrap3]}>
                  <Image source={{ uri: category.uri }} style={[globalStyles.ImageItem]} />
                </View>
              </TouchableOpacity>
              <Text style={[styles.categoryTitle]}>{category.category}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollBox: {
    height: STATUS_BOX_HEIGHT,
    marginTop: layout.pixelSizeVertical(40),
  },

  categoryTitle: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: layout.fontPixel(18),
  },

  wrap: {
    alignItems: 'center',
  },

  wrap2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrap3: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
