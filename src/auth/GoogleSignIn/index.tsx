import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

WebBrowser.maybeCompleteAuthSession();

export function GoogleSignIn() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    responseType: 'id_token',
    expoClientId: Constants.manifest?.extra?.expoKey,
    iosClientId: Constants.manifest?.extra?.iosKey,
    androidClientId: Constants.manifest?.extra?.androidKey,
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <SafeAreaView
      style={{ backgroundColor: '#0244be', flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
       <StatusBar style='light' />
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </SafeAreaView>
  );
}
