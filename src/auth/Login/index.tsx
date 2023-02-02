import React, { useState } from 'react';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import { StatusBar } from 'expo-status-bar';

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Checkbox from 'expo-checkbox';
import { useLoginHelper } from './useLoginHelper';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const { navigateForgotPassword } = useLoginHelper();

  return (
    <SafeAreaView style={[globalStyles.wrapper]}>
      <ScrollView
        contentContainerStyle={[
          { paddingHorizontal: layout.pixelSizeHorizontal(10), flexGrow: 1 },
          { paddingBottom: layout.pixelSizeVertical(40) },
        ]}
      >
        <StatusBar style="dark" />
        <View style={styles.headerLogin}>
          <Text style={styles.mainTextLogin}>Hi, Welcome Back!👋</Text>
          <Text style={styles.subTextLogin}>Hello again, you've been missed!</Text>
        </View>
        <View style={styles.emailView}>
          <Text style={styles.email}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="grey"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.passwordView}>
          <Text style={styles.password}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.checkBoxAndPassword}>
          <View style={styles.checkBoxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#0006b1' : undefined}
            />
            <Text style={styles.checkBoxText}>Remember Me</Text>
          </View>
          <Pressable onPress={navigateForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerLogin: {
    marginVertical: layout.pixelSizeVertical(30),
  },

  mainTextLogin: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: layout.fontPixel(30),
    marginBottom: layout.pixelSizeVertical(20),
  },
  subTextLogin: {
    fontFamily: 'Montserrat_400Regular',
  },

  email: {
    fontFamily: 'Montserrat_500Medium',
  },
  emailView: {
    marginVertical: layout.pixelSizeVertical(20),
  },
  password: {
    fontFamily: 'Montserrat_500Medium',
  },

  passwordView: {
    marginBottom: layout.pixelSizeVertical(20),
  },

  input: {
    height: layout.heightPixel(50),
    marginVertical: layout.pixelSizeVertical(10),
    borderWidth: 1,
    paddingVertical: layout.pixelSizeVertical(10),
    paddingHorizontal: layout.pixelSizeVertical(10),
    borderRadius: layout.fontPixel(5),
    color: 'black',
    borderColor: 'grey',
  },

  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    height: layout.heightPixel(28),
    width: layout.widthPixel(28),
    borderRadius: layout.fontPixel(6),
    marginRight: layout.fontPixel(10),
    borderColor: 'grey',
    borderWidth: 1,
  },
  checkBoxAndPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkBoxText: {
    fontFamily: 'Montserrat_600SemiBold',
  },
  forgotPassword: {
    fontFamily: 'Montserrat_600SemiBold',
    color: 'blue',
  },
});
