import {StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {InputProps} from '../UnAuthenticated/LoginScreen/Types';

const Input = ({
  onChangeText,
  value,
  autoFocus,
  innerRef,
  keyboardType,
  maxLength,
  onSubmitEditing,
  placeholder,
  secureTextEntry,
  style,
}: InputProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <TextInput
      value={value}
      style={[styles.input, isEditing && styles.inputEditing, style]}
      placeholder={placeholder ?? ''}
      keyboardType={keyboardType ?? 'default'}
      maxLength={maxLength ?? 1}
      cursorColor="#ff7b66"
      onFocus={() => setIsEditing(true)}
      onBlur={() => setIsEditing(false)}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      ref={innerRef}
      autoFocus={autoFocus ?? false}
      secureTextEntry={secureTextEntry ?? false}
      returnKeyType="next"
      blurOnSubmit={false}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 18,
    borderWidth: 3,
    borderColor: '#ff7b66',
    color: '#000',
  },
  inputEditing: {
    borderColor: '#3dbe9e',
  },
});
