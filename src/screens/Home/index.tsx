import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import { globalStyles } from '@globalStyles';
import { styles } from './styles';
import { useHomeHelper } from './useHomeHelper';
import { CurrentLocation, HomeHeader, NewsCategory, NewsStories } from '@components';
import { layout } from '@utils';

export function Home() {
  return (
    <SafeAreaView style={globalStyles.wrapper}>
      <View style={[globalStyles.container, { paddingBottom: layout.pixelSizeVertical(40) }]}>
        <View style={[globalStyles.deepWhite]}>
          <HomeHeader />
          <NewsStories />
          <CurrentLocation />
        </View>
        <NewsCategory />
      </View>
    </SafeAreaView>
  );
}
