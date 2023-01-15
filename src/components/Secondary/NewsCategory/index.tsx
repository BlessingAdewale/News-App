import React from 'react';
import { View, StyleSheet, StyleProp, TextStyle, ViewStyle } from 'react-native';
import {
  NavigationState,
  Route,
  SceneRendererProps,
  TabBar,
  TabBarIndicatorProps,
  TabBarItemProps,
} from 'react-native-tab-view';

//Routes
import { Politics } from '../Politics';
import { CurrentNews } from '../CurrentNews';
import { WorldNews } from '../WorldNews';

import { TabView, SceneMap } from 'react-native-tab-view';
import { layout } from '@utils';
import { colors } from '@constants';

export const NewsCategory = () => {
  const FirstRoute = () => (
    <View style={styles.firstRoute}>
      <CurrentNews />
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.secondRoute}>
      <WorldNews />
    </View>
  );

  const ThirdRoute = () => (
    <View style={styles.thirdRoute}>
      <Politics />
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Current News' },
    { key: 'second', title: 'World News' },
    { key: 'third', title: 'Politics' },
  ]);

  const renderTabBar = (
    props: JSX.IntrinsicAttributes &
      SceneRendererProps & {
        navigationState: NavigationState<Route>;
        scrollEnabled?: boolean | undefined;
        activeColor?: string | undefined;
        inactiveColor?: string | undefined;
        pressColor?: string | undefined;
        pressOpacity?: number | undefined;
        tabStyle?: StyleProp<ViewStyle>;
        indicatorStyle?: StyleProp<ViewStyle>;
        indicatorContainerStyle?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<TextStyle>;
        contentContainerStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        gap?: number | undefined;
        testID?: string | undefined;
      },
  ) => (
    <TabBar
      {...props}
      indicatorStyle={{ borderWidth: 2, borderColor: colors.primaryBlue, borderRadius: 3 }}
      indicatorContainerStyle={{}}
      labelStyle={{
       
        textAlign: 'left',
        textTransform: 'capitalize',
        fontFamily: 'Montserrat_700Bold',
        fontSize: layout.fontPixel(20),
        color: colors.primaryBlack,
      }}
      style={{ backgroundColor: '#fbfbfb' }}
      inactiveColor={colors.primaryGreyColor}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      style={styles.container}
      pagerStyle={styles.pager}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: layout.pixelSizeVertical(25),
    backgroundColor: '#fbfbfb',
  },

  pager: {
    marginTop: layout.pixelSizeVertical(15),
  },

  firstRoute: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },

  secondRoute: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },

  thirdRoute: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
});
