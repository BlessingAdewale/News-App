import { globalStyles } from '@globalStyles';
import { layout } from '@utils';

import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useOnBoardingHelper } from './useOnBoardingHelper';
import { colors, images } from '@constants';
import { Button } from '@components';

export function Onboarding() {
  const width = Dimensions.get('window').width;
  const { navigateLogin } = useOnBoardingHelper();
  return (
    <SafeAreaView style={[globalStyles.wrapper, { paddingBottom: layout.pixelSizeVertical(40) }]}>
      <Image
        source={images.onboarding}
        style={[StyleSheet.absoluteFill, { width }]}
        resizeMode="stretch"
      />

      <View style={styles.bottomContainer}>
        <View style={[globalStyles.container]}>
          <Text style={styles.mainText}>Let's Get {'\n'}Started</Text>
          <Text style={styles.subText}>
            Connect with the world with local news and international news. Enjoy safe and quality
            news.
          </Text>
          <Button
            buttonText="Join Now"
            buttonContainerStyle={{
              paddingVertical: layout.pixelSizeVertical(18),
              borderRadius: layout.fontPixel(20),
            }}
            colors={[colors.primaryWhite, colors.tertiaryWhite]}
            onPress={onPress}
          />
          <Text style={styles.belowButtonText}>Already have an account? {'Log in'}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: layout.pixelSizeVertical(350),
  },
  mainText: {
    color: '#fff',
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: layout.fontPixel(50),
    lineHeight: layout.heightPixel(75),
  },
  subText: {
    color: '#fff',
    fontFamily: 'Montserrat_400Regular',
    fontSize: layout.size.h4,
    lineHeight: layout.heightPixel(30),
  },
  belowButtonText: {
    color: '#fff',
    fontFamily: 'Montserrat_400Regular',
  },
});
