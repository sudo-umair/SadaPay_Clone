import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import React, {useState, useLayoutEffect, useEffect} from 'react';
import {type LoginScreenProps} from '../../navigation/Types';
import Button from '../../components/UI/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PhoneInput from '../../components/UnAuthenticated/LoginScreen/PhoneInput';

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [phone, setPhone] = useState('');
  const [disabled, setDisabled] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      statusBarColor: '#ff7b66',
    });
  }, [navigation]);

  useEffect(() => {
    if (phone.length === 12 && phone.startsWith('92')) {
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
        <PhoneInput phone={phone} setPhone={setPhone} />
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
});
