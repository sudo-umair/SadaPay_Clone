import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useLayoutEffect, useEffect} from 'react';
import {type LoginScreenProps} from '../../navigation/Types';
import Button from '../../components/UI/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [phone, setPhone] = useState('');
  const [disabled, setDisabled] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      statusBarColor: '#ff7b66',
    });
  }, [navigation]);

  useEffect(() => {
    if (phone.length === 13) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [phone]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Let's get Started</Text>
        <Text style={styles.subtitle}>Please enter your mobile number</Text>
        <TextInput
          style={[styles.input, isEditing && styles.inputEditing]}
          placeholder="923160500399"
          keyboardType="numeric"
          maxLength={13}
          cursorColor="#ff7b66"
          onFocus={() => setIsEditing(true)}
          onBlur={() => setIsEditing(false)}
          onChangeText={text => setPhone(text)}
        />
      </View>
      <KeyboardAvoidingView behavior="height">
        <Button
          isIcon={true}
          title="Continue"
          disabled={disabled}
          onPress={() => navigation.navigate('Verification', {phone})}>
          <Icon name="navigate-next" size={24} color="#fff" />
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ff7b66',
    padding: 20,
  },
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 55,
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fffffc',
    marginTop: 15,
  },
  input: {
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 18,
    borderWidth: 3,
    borderColor: '#ff7b66',
  },
  inputEditing: {
    borderColor: '#3dbe9e',
  },
});
