import { globalStyles } from '@globalStyles';
import { layout } from '@utils';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export function SignUp() {
  return (
    <SafeAreaView style={[globalStyles.wrapper]}>
      <ScrollView
        contentContainerStyle={[
          globalStyles.container,
          { paddingBottom: layout.pixelSizeVertical(40) },
        ]}
      >
        <View style={styles.header}>
          <Text>Create Account</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {},
});
