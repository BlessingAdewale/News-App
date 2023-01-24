import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

export const NewsCarousel = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={height}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
            <View
                style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: 'center',
                }}
            >
                <Text style={{ textAlign: 'center', fontSize: 30 }}>
                    {index}
                </Text>
            </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
