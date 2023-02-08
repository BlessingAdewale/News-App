import { useAuthentication } from '@hooks';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import { logout } from '@redux';
import { useDispatch } from 'react-redux';
const dispatch = useDispatch();

const auth = getAuth();
export function Profile() {
  const { user } = useAuthentication();

  const logoutOfApp = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
  };
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}} >Welcome {user?.email}!</Text>
      <Text style={{color: 'white'}} >{user?.displayName}</Text>
      <Button title="Sign Out" style={styles.button} onPress={logoutOfApp} />
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
