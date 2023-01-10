import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';


import { globalStyles } from '@globalStyles';
import { styles } from './styles';
import { useHomeHelper } from './useHomeHelper';
import { CurrentLocation, HomeHeader, NewsStories } from '@components';
import { layout } from '@utils';

export function Home() {
  return (
    <SafeAreaView style={globalStyles.wrapper}>
      <ScrollView
        contentContainerStyle={[
          globalStyles.container,
          { paddingBottom: layout.pixelSizeVertical(40) },
        ]}
        showsVerticalScrollIndicator={false}
      >
       
        <HomeHeader />
        <NewsStories />
        {/* <CurrentLocation /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
