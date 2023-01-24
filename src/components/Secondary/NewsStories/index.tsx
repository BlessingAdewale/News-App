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
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeTabScreenNavigationProp, IStatus } from 'navigation/types';

const STATUS_BOX_HEIGHT = layout.heightPixel(130);
const STATUS_BOX_MARGIN_RIGHT = layout.pixelSizeHorizontal(15);

export const NewsStories = () => {
  const { width } = useWindowDimensions();
  const calcWidth = width - globalStyles.container.paddingHorizontal * 2.8;
  const navigation = useNavigation<HomeTabScreenNavigationProp>();

  const handlePress = (status: IStatus) => {
    navigation.navigate('News', {
      ...status,
    });
  };

  const data = [
    {
      id: '1',
      category: 'Science',
      uri: 'https://images.unsplash.com/photo-1673297001522-e5b8dd135422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: '2',
      category: 'Art',
      uri: 'https://images.unsplash.com/photo-1583912268183-a34d41fe464a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: '3',
      category: 'Auto',
      uri: 'https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/81349905_10156679160781120_9070810254425456640_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=973b4a&_nc_ohc=p0rlGXECX5QAX8gpAXO&_nc_ht=scontent-los2-1.xx&oh=00_AfByqHdNZPOPc3rv2RA2wiIq8CzC8hy0N98w5KST4TIuNg&oe=63DC142F',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },

    {
      id: '4',
      category: 'Space',
      uri: 'https://triasrnd.com/system/images/245/big/pld_miura_flight.jpg?1542109083',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },

    {
      id: '5',
      category: 'Fashion',
      uri: 'https://images.unsplash.com/photo-1673337615896-a849cef919e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },

    {
      id: '6',
      category: 'Education',
      uri: 'https://images.unsplash.com/photo-1554871037-99938249e220?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <View style={[styles.container]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ maxHeight: STATUS_BOX_HEIGHT }}
      >
        {data.map((status, index) => {
          return (
            <View
              key={status.id}
              style={[
                styles.wrap1,
                {
                  marginRight: data.length === index + 1 ? 0 : STATUS_BOX_MARGIN_RIGHT,
                  width: calcWidth * 0.25,
                },
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                key={status.id}
                style={[styles.wrap2]}
                onPress={() => handlePress(status)}
              >
                <View style={[globalStyles.ItemOutline, styles.wrap3]}>
                  <Image source={{ uri: status.uri }} style={[globalStyles.Item]} />
                </View>
              </TouchableOpacity>
              <Text style={[styles.categoryTitle]}>{status.category}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: STATUS_BOX_HEIGHT,
    marginTop: layout.pixelSizeVertical(35),
  },

  categoryTitle: {
    marginVertical: layout.pixelSizeVertical(5),
    fontFamily: 'Montserrat_500Medium',
    fontSize: layout.fontPixel(15),
  },

  wrap1: {
    alignItems: 'center',
  },

  wrap2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrap3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
