import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '@constants';

export const CurrentLocation = () => {
  const image = {
    uri: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  };

  return (
    <View style={[styles.container]}>
      <ImageBackground source={images.london} style={styles.imageBackground} resizeMode="cover">
        <LinearGradient
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={['#f7faff', '#fcfcfc', '#ffffff']}
          style={styles.linearGradient}
        >
          <View style={globalStyles.rowAround}>
            <Image source={image} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
              <Text style={styles.locationWelcomeMessage}>Your current location</Text>
              <Text style={styles.locationAddress}>London</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: layout.pixelSizeVertical(20),
  },
  imageBackground: {
    borderRadius: layout.pixelSizeVertical(15),
    height: layout.heightPixel(140),
    overflow: 'hidden',
  },
  image: {
    height: layout.heightPixel(120),
    width: layout.widthPixel(120),
    resizeMode: 'cover',
  },

  textContainer: {
    marginTop: layout.pixelSizeVertical(15),
    marginRight: layout.pixelSizeHorizontal(25)
  },

  locationWelcomeMessage: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: layout.fontPixel(15),
  },

  locationAddress: {
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: layout.fontPixel(30),
    marginTop: layout.pixelSizeVertical(10),
  },
  linearGradient: {
    flex: 1,
    borderRadius: layout.fontPixel(2)
  },
});
