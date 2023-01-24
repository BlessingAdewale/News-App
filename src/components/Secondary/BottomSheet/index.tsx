import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { colors } from '@constants';
import { layout } from '@utils';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const BottomSheet = () => {
  const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
  const translateY = useSharedValue(0);
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
        translateY.value = withSpring(0, { damping: 50 });
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 });
      }
    });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 2, { damping: 100 });
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
      <Animated.View style={[styles.BottomSheetContainer, rBottomSheetStyle]} />
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
});
