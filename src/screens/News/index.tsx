import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { BottomSheet } from '@components';
import { StatusBar } from 'expo-status-bar';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function News() {
  const [artData, setArtData] = useState([]);
  const [autoData, setAutoData] = useState([]);
  const [spaceData, setSpaceData] = useState([]);
  const [scienceData, setScienceData] = useState([]);
  const [fashionData, setFashionData] = useState([]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
      </View>
      <BottomSheet />
    </GestureHandlerRootView>
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
