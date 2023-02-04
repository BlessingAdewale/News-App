import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { ResponseType } from 'expo-auth-session';
import { getAuth, FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

WebBrowser.maybeCompleteAuthSession();

export function FacebookSignIn() {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    responseType: ResponseType.Token,
    clientId: '1295602157836534',
      
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      const auth = getAuth();
      const provider = new FacebookAuthProvider();
      const credential = FacebookAuthProvider.credential(access_token);
      // Sign in with the credential from the Facebook user.
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '##0244be', justifyContent: 'center', alignItems: 'center' }}
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
