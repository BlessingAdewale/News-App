import { useAuthentication } from '@hooks';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();
export function Profile() {
  const { user } = useAuthentication();
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}} >Welcome {user?.email}!</Text>
      <Text style={{color: 'white'}} >{user?.displayName}</Text>
      <Button title="Sign Out" style={styles.button} onPress={() => signOut(auth)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0244be',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    color: 'white'
  },
});
