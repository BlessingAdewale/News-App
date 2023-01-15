import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@constants';
import { layout } from '@utils';

type NewsCardProps = {
  title: string;
  posted: string;
  views: string;
  image: string;
  category: string;
};

export const NewsCard = ({ title, posted, views, category, image }: NewsCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
        <View style={styles.wrap}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.wrap2}>
            <View style={styles.duration}>
              <MaterialCommunityIcons
                name="clock-time-three-outline"
                size={15}
                color="black"
                style={styles.clockIcon}
              />
              <Text style={styles.posted}>{posted}</Text>
            </View>
            <View style={styles.viewers}>
              <MaterialCommunityIcons
                name="eye-outline"
                size={15}
                color="black"
                style={styles.eyeIcon}
              />
              <Text style={styles.numberOfViews}>{views}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: layout.pixelSizeVertical(25),
    backgroundColor: colors.primaryWhite,
    borderRadius: layout.fontPixel(20),
    shadowColor: colors.primaryBlack,
    shadowOpacity: 0.06,
    shadowRadius: 20,
    shadowOffset: {
      width: 12,
      height: 9,
    },
    elevation: 10,
    height: layout.heightPixel(130),
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: layout.pixelSizeVertical(20),
    marginLeft: layout.pixelSizeHorizontal(15),
  },

  image: {
    borderRadius: layout.fontPixel(20),
    width: layout.widthPixel(70),
    height: layout.heightPixel(90),
    resizeMode: 'cover'
  },
  wrap: {
    flexShrink: 1,
    marginLeft: layout.pixelSizeHorizontal(20),
    textAlign: 'left',
  },
  category: {
    fontFamily: 'Montserrat_500Medium',
    marginBottom: layout.pixelSizeHorizontal(5),
  },

  title: {
    flexWrap: 'wrap',
    numberOfLines: 2,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: layout.fontPixel(18),
    marginBottom: layout.pixelSizeHorizontal(5),
  },
  wrap2: {
    flexDirection: 'row',
    alignItems: 'center',
 
    
  },
  duration: {
    flexDirection: 'row',

    marginRight: layout.pixelSizeHorizontal(30)
  },

  clockIcon: {
    paddingRight: layout.pixelSizeHorizontal(10),
    color: colors.primaryGreyColor,
  },
  posted: {
    fontFamily: 'Montserrat_500Medium',
    color: colors.primaryGreyColor,
  },
  eyeIcon: {
    paddingRight: layout.pixelSizeHorizontal(13),
    color: colors.primaryGreyColor,
  },
  viewers: {
    flexDirection: 'row',
  },
  numberOfViews: {
    fontFamily: 'Montserrat_500Medium',
    color: colors.primaryGreyColor,
  },
});
