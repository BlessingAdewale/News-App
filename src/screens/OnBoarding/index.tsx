import { globalStyles } from '@globalStyles';
import { layout } from '@utils';

import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useOnBoardingHelper } from './useOnBoardingHelper';
import { colors, images } from '@constants';
import { Button } from '@components';

export function Onboarding() {
  const width = Dimensions.get('window').width;
  const { navigateLogin, navigateSignUp } = useOnBoardingHelper();
  return (
    <SafeAreaView style={[globalStyles.wrapper, { paddingBottom: layout.pixelSizeVertical(30) }]}>
      <Image
        source={images.onboarding}
        style={[StyleSheet.absoluteFill, { width }]}
        resizeMode="cover"
      />

      <View style={styles.bottomContainer}>
        <View style={{ paddingHorizontal: layout.pixelSizeHorizontal(10), flexGrow: 1 }}>
          <Text style={styles.mainText}>Let's Get {'\n'}Started</Text>
          <Text style={styles.subText}>
            Connect with the world with local news and international news. Enjoy quality news.
          </Text>
          <Button
            buttonText="Join Now"
            buttonContainerStyle={{
              paddingVertical: layout.pixelSizeVertical(18),
              borderRadius: layout.fontPixel(10),
              marginTop: layout.pixelSizeVertical(90),
              marginBottom: layout.pixelSizeVertical(35),
              backgroundColor: colors.primaryWhite,
            }}
            Colors={[]}
            onPress={navigateSignUp}
          />

          <Text style={styles.belowButtonText}>
            Already have an account?{' '}
            <Text onPress={navigateLogin} style={styles.innerText}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    marginTop: layout.pixelSizeVertical(300),
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
    marginTop: 25,
  },
  belowButtonText: {
    color: '#fff',
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
  },
  innerText: {
    color: '#fff',
    fontFamily: 'Montserrat_500Medium',
  },
});
