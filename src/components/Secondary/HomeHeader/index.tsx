import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '@globalStyles';
import { colors } from '@constants';
import { layout } from '@utils';

export const HomeHeader = () => {
  return (
    <View style={[globalStyles.rowBetween, styles.container]}>
      <TouchableOpacity activeOpacity={0.7}>
        <FontAwesome name="align-left" size={layout.fontPixel(23)} color={colors.tertiaryGreyColor1} />
      </TouchableOpacity>
      <View style={[globalStyles.rowBetween]}>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="ios-search" size={layout.fontPixel(23)} color={colors.tertiaryGreyColor1} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bookmark]} activeOpacity={0.7}>
          <MaterialIcons
            name="bookmark-border"
            size={layout.fontPixel(23)}
            color={colors.tertiaryGreyColor1}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(15),
  },

  bookmark: {
    marginLeft: layout.pixelSizeHorizontal(35),
  },
});
