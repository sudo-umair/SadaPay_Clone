import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {ButtonProps} from './Types';

const Button = ({title, onPress, disabled}: ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        android_ripple={{color: '#4e4e4e', borderless: false}}
        style={[styles.button, disabled && styles.disabledButton]}>
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
  },
  button: {
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: '#292929',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
