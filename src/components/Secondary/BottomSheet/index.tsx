import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';

import { layout } from '@utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { BottomSheetProps } from 'navigation/types';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const BottomSheet = ({ author, duration, viewers, article, image }: BottomSheetProps) => {
  const translateY = useSharedValue(0);
  const scrollTo = useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
  const context = useSharedValue({ y: 0 });
  const panGesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 2) {
        scrollTo(0);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  useEffect(() => {
    scrollTo(-SCREEN_HEIGHT / 2);
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.BottomSheetContainer, rBottomSheetStyle]}>
        {/* Header */}
        <View style={styles.author}>
          <Image source={{ uri: image }} style={styles.authorImage} resizeMode="cover" />
          <Text style={styles.authorName}>{author}</Text>
        </View>
        <View style={styles.duration}>
          <MaterialCommunityIcons
            name="clock-time-three-outline"
            size={15}
            color="black"
            style={styles.clockIcon}
          />
          <Text style={styles.durationText}>{duration}</Text>
        </View>

        <View style={styles.viewers}>
          <MaterialCommunityIcons
            name="eye-outline"
            size={15}
            color="black"
            style={styles.eyeIcon}
          />
          <Text style={styles.views}>{viewers}</Text>
        </View>
        {/* Text */}
        <View>
          {/* Text Heading */}
          <View style={styles.textHeading}>
            <Text style={styles.aboutText}>About</Text>
            <Text style={styles.readMoreText}>Read More</Text>
          </View>
          <Text style={styles.articleText}>{article}</Text>
          <Image source={{ uri: image }} style={styles.articleImage} />
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  BottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: layout.width,
    backgroundColor: '#fbfbfb',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: layout.fontPixel(25),
  },

  author: {},

  authorImage: {},
  authorName: {},
  duration: {},
  clockIcon: {},
  durationText: {},
  viewers: {},
  eyeIcon: {},
  views: {},
  textHeading: {},
  aboutText: {},
  readMoreText: {},
  articleText: {},
  articleImage: {},
});
