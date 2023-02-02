import React from 'react';
import { layout } from '@utils';
import { LinearGradient } from 'expo-linear-gradient';

import { Text, TouchableOpacity } from 'react-native';
import { colors } from '@constants';

export type styleProps = {
  paddingVertical: number;
  borderRadius: number;
  marginTop: number;
  marginBottom: number;
  backgroundColor: string;
};

export type ButtonProp = {
  buttonText: string;
  Colors: string[];
  buttonContainerStyle: styleProps;
  onPress: () => void;
};

export const Button = ({ buttonText, buttonContainerStyle, Colors, onPress }: ButtonProp) => {
  if (Colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={Colors}
          style={{
            ...buttonContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: colors.primaryWhite,
              fontSize: layout.size.h3,
              fontFamily: 'Montserrat_400Regular',
            }}
          >
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          ...buttonContainerStyle,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            textAlign: 'center',
            color: colors.primaryBlack,
            fontSize: layout.size.h3,
            fontFamily: 'Montserrat_400Regular',
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};
