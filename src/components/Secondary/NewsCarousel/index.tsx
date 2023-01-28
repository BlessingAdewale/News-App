import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import { BottomSheet } from '../BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { layout } from '@utils';
import { colors } from '@constants';
import { LinearGradient } from 'expo-linear-gradient';

export const NewsCarousel = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  type ItemData = {
    id: number;
    category: string;
    uri: string;
    views: string;
    title: string;
    posted: string;
    news: string;
    author: string;
    authorImage: string;
    summary: string;
  };

  const dataArt: ItemData[] = [
    {
      id: 1,
      category: 'Arts',
      uri: 'https://images.unsplash.com/photo-1583912268183-a34d41fe464a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      views: '732 views',
      title: 'Stargazer captures night sky from Sheffield garden',
      posted: '30 min ago',
      author: 'Miss Smith R',
      authorImage: 'hhsjs',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    },

    {
      id: 2,
      category: 'Arts',
      uri: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      views: '732 views',
      title: 'Stargazer captures night sky from Sheffield garden',
      posted: '30 min ago',
      author: 'Miss Smith R',
      authorImage: 'hhshhshshs',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    },

    {
      id: 3,
      category: 'Arts',
      uri: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      views: '732 views',
      title: 'Stargazer captures night sky from Sheffield garden',
      posted: '30 min ago',
      author: 'Miss Smith R',
      authorImage: 'hshshhshs',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    },

    {
      id: 4,
      category: 'Arts',
      uri: 'https://images.unsplash.com/photo-1616541302526-c9a465ef2f5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2454&q=80',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      views: '732 views',
      title: 'Stargazer captures night sky from Sheffield garden',
      posted: '30 min ago',
      author: 'Miss Smith R',
      authorImage: 'jjsjsjsjjsj',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    },
  ];

  type ItemProps = {
    item: ItemData;
  };

  const handlePress = ({ item }: ItemProps) => {
    <BottomSheet
      authorImage={item.authorImage}
      author={item.author}
      duration={item.posted}
      viewers={item.views}
      article={item.news}
      image={item.uri}
    />;
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Carousel
        pagingEnabled={true}
        loop
        width={width}
        height={height}
        autoPlay={true}
        data={dataArt}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ item }: { item: ItemData }) => (
          
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: 'blue',
              borderWidth: 0,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: item.uri }}
              style={[StyleSheet.absoluteFill, { width }]}
              resizeMode="cover"
            />
            
            

            <View style={styles.heading}>
              <Text style={{ fontSize: layout.fontPixel(30), color: colors.primaryWhite }}>
                {item.category}
              </Text>
              <TouchableOpacity activeOpacity={0.7} style={styles.closeButton}>
                <Ionicons name="close-outline" size={30} color={colors.primaryWhite} />
              </TouchableOpacity>
            </View>

            <View style={styles.below}>
              <BlurView intensity={40} tint="dark" style={styles.blurContainer}>
                <View style={styles.blurViewText}>
                  <Text style={styles.textTitle}>{item.title}</Text>
                  <Text style={styles.textSummary}>{item.summary}</Text>
                </View>
              </BlurView>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[]}
                style={styles.bottomLinearGradient}
              >
                <TouchableOpacity style={styles.lowerButton} onPress={handlePress}>
                  <Text style={styles.swipeForMore}>Swipe for more {item.category} News</Text>
                  <Feather name="chevron-down" size={24} color={colors.primaryWhite} />
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </SafeAreaView>
        )}
      />
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  lowerButton: {
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    left: layout.pixelSizeHorizontal(180),
    top: 0,
    bottom: 0,
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },
  below: {
    marginBottom: layout.pixelSizeVertical(25),
  },

  blurContainer: {
    marginHorizontal: layout.pixelSizeHorizontal(15),
    height: layout.heightPixel(200),
    marginBottom: layout.pixelSizeVertical(30),
    overflow: 'hidden',
    borderRadius: layout.fontPixel(25),
  },
  blurViewText: {
    height: layout.heightPixel(180),
    marginHorizontal: layout.pixelSizeHorizontal(20),
    paddingHorizontal: layout.pixelSizeHorizontal(5),
    paddingVertical: layout.pixelSizeHorizontal(5),
  },

  textTitle: {
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: layout.fontPixel(25),
    color: colors.primaryWhite,
    marginVertical: layout.pixelSizeVertical(20),
    numberOfLines: layout.fontPixel(2),
  },
  textSummary: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: layout.fontPixel(20),
    color: colors.primaryWhite,
    marginBottom: layout.pixelSizeVertical(20),
    numberOfLines: layout.fontPixel(4),
    height: layout.heightPixel(50),
  },
  swipeForMore: {
    color: colors.primaryWhite,
    fontFamily: 'Montserrat_400Regular',
    fontSize: layout.fontPixel(20),
    marginBottom: layout.pixelSizeVertical(25),
  },

  bottomLinearGradient: {},
});
``;
