import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {ButtonProps} from './Types';

const Button = ({
  title,
  onPress,
  disabled,
  style,
  textStyle,
  children,
  isIcon,
}: ButtonProps) => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        android_ripple={{color: '#4e4e4e', borderless: false}}
        style={[
          styles.button,
          disabled && styles.disabledButton,
          isIcon && styles.buttonWithIcon,
        ]}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        {children && children}
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#111111',
    paddingVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  buttonWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#292929',
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
