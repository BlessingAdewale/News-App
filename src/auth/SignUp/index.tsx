import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Button, SocialButton } from '@components';
import { colors } from '@constants';
import { useSignUpHelper } from './useSignUpHelper';
import { StatusBar } from 'expo-status-bar';
import { SocialIcon } from 'react-native-elements';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export function SignUp() {
  const [isChecked, setChecked] = useState(false);
  const [value, setValue] = useState({
    email: '',
    password: '',
    telephoneNumber: '',
    error: '',
  });

  const { navigateLogin, navigateFacebook, navigateGoogle } = useSignUpHelper();
  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.',
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigateLogin;
    } catch (error) {
      setValue({
        ...value,
        error: 'Invalid email or password',
      });
    }
  }

  return (
    <SafeAreaView style={[globalStyles.wrapper]}>
      <ScrollView
        contentContainerStyle={[
          { paddingHorizontal: layout.pixelSizeHorizontal(15), flexGrow: 1 },
          { paddingBottom: layout.pixelSizeVertical(40) },
        ]}
      >
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={styles.mainText}>Create Account</Text>
          <Text style={styles.subText}>Connect with your friends today!</Text>
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
        <View style={styles.numberView}>
          <Text style={styles.number}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            placeholderTextColor="grey"
            keyboardType="numbers-and-punctuation"
            textBreakStrategy="simple"
            autoComplete="tel"
            textContentType="telephoneNumber"
            value={value.telephoneNumber}
            onChangeText={(text) => setValue({ ...value, telephoneNumber: text })}
          />
        </View>
        <View>
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

        <View style={styles.checkBoxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#0244be' : undefined}
          />
          <Text style={styles.checkBoxText}>I agree to the terms and conditions</Text>
        </View>

        <Button
          buttonText="Sign Up"
          buttonContainerStyle={{
            paddingVertical: layout.pixelSizeVertical(18),
            borderRadius: layout.fontPixel(10),
            marginTop: layout.pixelSizeVertical(50),
            marginBottom: layout.pixelSizeVertical(29),
            backgroundColor: '',
          }}
          Colors={[colors.deepBlue, colors.primaryBlue]}
          onPress={signUp}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.horizontalRule} />
          <View>
            <Text style={styles.orSignUpWith}>Or Sign Up with</Text>
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
          <Text onPress={navigateLogin} style={styles.innerText}>
            Login
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: layout.pixelSizeVertical(30),
  },

  mainText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: layout.fontPixel(30),
    marginBottom: layout.pixelSizeVertical(20),
  },
  subText: {
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

  number: {
    fontFamily: 'Montserrat_500Medium',
  },

  numberView: {
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
    marginTop: layout.pixelSizeVertical(20),
  },

  checkbox: {
    height: layout.heightPixel(28),
    width: layout.widthPixel(28),
    borderRadius: layout.fontPixel(6),
    marginRight: layout.fontPixel(10),
    borderColor: 'grey',
    borderWidth: 1,
  },

  checkBoxText: {
    fontFamily: 'Montserrat_600SemiBold',
  },

  orSignUpWith: {
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
    marginTop: layout.pixelSizeVertical(10),
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
