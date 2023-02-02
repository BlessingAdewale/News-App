import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Button, SocialButton } from '@components';
import { colors } from '@constants';
import { useSignUpHelper } from './useSignUpHelper';
import { StatusBar } from 'expo-status-bar';
import { SocialIcon } from 'react-native-elements'

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [isChecked, setChecked] = useState(false);

  const { navigateLogin } = useSignUpHelper();

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
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            value={telephoneNumber}
            onChangeText={(text) => setTelephoneNumber(text)}
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
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.checkBoxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#0006b1' : undefined}
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
          onPress={navigateLogin}
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
            onPress={navigateLogin}
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
            onPress={navigateLogin}
          />
        </View>
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
});
