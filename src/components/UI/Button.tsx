import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {ButtonProps} from './Types';

const Button = ({
  title,
  onPress,
  disabled,
  style,
  textStyle,
  buttonStyle,
  children,
  isIcon,
  android_ripple,
}: ButtonProps) => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        android_ripple={android_ripple ?? {color: '#ffffff', borderless: false}}
        style={[
          styles.button,
          disabled && styles.disabledButton,
          isIcon && styles.buttonWithIcon,
          buttonStyle,
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
