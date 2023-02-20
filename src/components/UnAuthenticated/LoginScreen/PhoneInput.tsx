import {StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {PhoneInputProps} from './Types';

const PhoneInput = ({phone, setPhone}: PhoneInputProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <TextInput
      value={phone}
      style={[styles.input, isEditing && styles.inputEditing]}
      placeholder="923160500399"
      keyboardType="numeric"
      maxLength={12}
      cursorColor="#ff7b66"
      onFocus={() => setIsEditing(true)}
      onBlur={() => setIsEditing(false)}
      onChangeText={text => setPhone(text)}
    />
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  input: {
    marginTop: 30,
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
