import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={[globalStyles.wrapper]}>
      <ScrollView
        contentContainerStyle={[
          globalStyles.container,
          { paddingBottom: layout.pixelSizeVertical(40) },
        ]}
      >
        <Text>Hi, Welcome Back!👋</Text>
        <Text>Hello again, you've been missed!</Text>
        <View>
          <Text>Email Address</Text>
          <TextInput
            style={{}}
            placeholder="Enter your email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            style={{}}
            placeholder="Enter your password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
