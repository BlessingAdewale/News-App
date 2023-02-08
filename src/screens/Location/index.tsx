import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export function Location() {
  return (
    <View style={styles.container}>
      <Button title="Get Location" />
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
    color: 'white',
  },
});
