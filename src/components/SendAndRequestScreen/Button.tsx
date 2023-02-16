import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {ButtonProps} from './Types';

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: '#4e4e4e', borderless: false}}
        style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '45%',
    borderRadius: 10,
    overflow: 'hidden',
    // margin: 10,
  },
  button: {
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
