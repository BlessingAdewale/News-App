import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { BottomSheet, NewsCarousel } from '@components';
import { StatusBar } from 'expo-status-bar';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function News() {
  

  return (
    <View style={{}}>
      <NewsCarousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
