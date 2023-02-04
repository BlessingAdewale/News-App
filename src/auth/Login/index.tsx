import React, { useState } from 'react';
import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import { StatusBar } from 'expo-status-bar';

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Checkbox from 'expo-checkbox';
import { useLoginHelper } from './useLoginHelper';
import { Button, SocialButton } from '@components';
import { colors } from '@constants';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export function Login() {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: '',
  });
  const [isChecked, setChecked] = useState(false);

  const { navigateForgotPassword, navigateFacebook, navigateGoogle, navigateSignUp } =
    useLoginHelper();

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.',
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: 'Wrong password or email',
      });
    }
  }

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
            value={value.email}
            onChangeText={(text) => setValue({ ...value, email: text })}
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
            value={value.password}
            onChangeText={(text) => setValue({ ...value, password: text })}
          />
        </View>

        <View style={styles.checkBoxAndPassword}>
          <View style={styles.checkBoxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#0244be' : undefined}
            />
            <Text style={styles.checkBoxText}>Remember Me</Text>
          </View>
          <Pressable onPress={navigateForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </Pressable>
        </View>

        <Button
          buttonText="Login"
          buttonContainerStyle={{
            paddingVertical: layout.pixelSizeVertical(18),
            borderRadius: layout.fontPixel(10),
            marginTop: layout.pixelSizeVertical(50),
            marginBottom: layout.pixelSizeVertical(29),
            backgroundColor: '',
          }}
          Colors={[colors.deepBlue, colors.primaryBlue]}
          onPress={signIn}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.horizontalRule} />
          <View>
            <Text style={styles.orLoginWith}>Or Login with</Text>
          </View>
          <View style={styles.horizontalRule} />
        </View>

        <View style={styles.rowSignUp}>
          <SocialButton
            buttonText="Facebook"
            buttonContainerStyle={{
              paddingVertical: layout.pixelSizeVertical(18),
              paddingHorizontal: layout.pixelSizeHorizontal(50),
              borderRadius: layout.fontPixel(10),
              marginTop: layout.pixelSizeVertical(30),
              marginBottom: layout.pixelSizeVertical(29),
              borderWidth: 1,
              borderColor: 'grey',
            }}
            onPress={navigateFacebook}
          />
          <SocialButton
            buttonText="Google"
            buttonContainerStyle={{
              paddingVertical: layout.pixelSizeVertical(18),
              paddingHorizontal: layout.pixelSizeHorizontal(60),
              borderRadius: layout.fontPixel(10),
              marginTop: layout.pixelSizeVertical(30),
              marginBottom: layout.pixelSizeVertical(29),
              borderWidth: 1,
              borderColor: 'grey',
            }}
            onPress={navigateGoogle}
          />
        </View>
        {!!value.error && (
          <View>
            <Text style={styles.error}>{value.error}</Text>
          </View>
        )}
        <Text style={styles.belowButtonText}>
          Already have an account?{' '}
          <Text onPress={navigateSignUp} style={styles.innerText}>
            Sign Up
          </Text>
        </Text>
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
    color: '#0244be',
  },
  orLoginWith: {
    paddingHorizontal: layout.pixelSizeHorizontal(25),
    textAlign: 'center',
    fontFamily: 'Montserrat_400Regular',
  },
  horizontalRule: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
    borderRadius: layout.fontPixel(5),
  },

  rowSignUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  belowButtonText: {
    color: 'grey',
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
    marginTop: layout.pixelSizeVertical(70),
  },
  innerText: {
    color: colors.deepBlue,
    fontFamily: 'Montserrat_500Medium',
  },
  error: {
    marginTop: layout.pixelSizeVertical(5),
    padding: layout.fontPixel(10),
    color: '#0244be',
    fontFamily: 'Montserrat_300Light',
    textAlign: 'center',
  },
});
