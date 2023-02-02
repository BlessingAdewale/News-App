import React from 'react';
import { layout } from '@utils';

import { Button, Text, TouchableOpacity } from 'react-native';

import { colors } from '@constants';

export type socialStyleProps = {
  paddingVertical: number;
  borderRadius: number;
  marginTop: number;
  marginBottom: number;
  paddingHorizontal: number;
  borderWidth: number;
  borderColor: string;
};

export type SocialButtonProp = {
  buttonText: string;
  buttonContainerStyle: socialStyleProps;
  onPress: () => void;
};

export const SocialButton = ({ buttonText, buttonContainerStyle, onPress }: SocialButtonProp) => {
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
};
