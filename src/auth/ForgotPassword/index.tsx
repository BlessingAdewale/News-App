import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ForgotPassword() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0244be',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StatusBar style="light" />

      <Text style={{color: 'white'}}> This is Forgot Password</Text>
    </SafeAreaView>
  );
}
