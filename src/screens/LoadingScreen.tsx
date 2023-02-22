import {StyleSheet, View, ActivityIndicator, Image} from 'react-native';
import React from 'react';

const LoadingScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Image
        resizeMode="contain"
        source={require('../assets/images/sadapay.png')}
      />
      <ActivityIndicator size="large" color="#ff7b66" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
