import { layout } from '@utils';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

export type colorsProp = {
  length: number;
  [index: string]: number | string;
};

export type styleProps = {
  paddingVertical: number;
  borderRadius: number;
};

export type ButtonProp = {
  buttonText: string;
  colors: string[];
  buttonContainerStyle: styleProps;
  onPress: () => void;
};

export const Button = ({ buttonText, buttonContainerStyle, colors, onPress }: ButtonProp) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          style={{
            ...buttonContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: layout.size.h3,
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
            color: '',
            fontSize: layout.size.h3,
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
};
