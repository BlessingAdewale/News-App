import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '@globalStyles';
import { colors } from '@constants';
import { layout } from '@utils';

export const HomeHeader = () =>{
  return (
    <View style={[globalStyles.rowBetween, styles.container]}>
      <TouchableOpacity activeOpacity={0.7}><FontAwesome name="align-left" size={20} /></TouchableOpacity>
      <View style={[globalStyles.rowBetween]}>
        <TouchableOpacity><Ionicons name="ios-search" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={[styles.bookmark]}><MaterialIcons name="bookmark-border" size={24} color="black" /></TouchableOpacity>
        </View>
     </View>
  );
}


const styles = StyleSheet.create({

  container: {
    marginVertical: layout.pixelSizeVertical(15),
  },

  bookmark: {
    marginLeft: layout.pixelSizeHorizontal(35)
  }

});