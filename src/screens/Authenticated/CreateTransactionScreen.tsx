import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import Button from '../../components/UI/Button';
import React, {useLayoutEffect, useState} from 'react';
import {type CreateTransactionScreenProps} from '../../navigation/Types';
import Input from '../../components/UI/Input';
import {useToast} from 'react-native-toast-notifications';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CreateTransactionScreen = ({
  navigation,
  route,
}: CreateTransactionScreenProps) => {
  const [phone, setPhone] = useState('');
  const [info, setInfo] = useState('');
  const [disabled, setDisabled] = useState(true);

  // const {amount, mode} = route.params;

  // const toast = useToast();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      statusBarColor: '#fff',
      headerShown: true,
      headerShadowVisible: false,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <Text style={styles.headerRightText}>Get Help</Text>,
    });
  }, [navigation]);

  const onContinue = () => {};

  const onChangeText = (text: string) => {
    setPhone(text);
    if (text.length === 12 && text.startsWith('92')) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Account Number</Text>
        <Text style={styles.subtitle}>SadaPay</Text>
        <Text style={styles.label}>Account Number</Text>
        <Input
          value={phone}
          onChangeText={onChangeText}
          style={styles.input}
          autoFocus={true}
          placeholder="923000000000"
          maxLength={12}
          keyboardType="numeric"
        />
        <Text style={[styles.info, !!info && styles.infoActivated]}>
          {info}
        </Text>
      </View>
      <KeyboardAvoidingView behavior="height">
        <Button
          isIcon={true}
          title="Continue"
          disabled={disabled}
          buttonStyle={styles.button}
          onPress={onContinue}>
          <Icon name="navigate-next" size={24} color="#ffffff" />
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateTransactionScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  headerRightText: {
    color: '#FA806B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
  },
  label: {
    marginTop: 25,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3dbe9e',
  },
  input: {
    borderColor: '#3dbe9e',
  },
  info: {
    marginTop: 10,
    marginLeft: 5,
    color: '#ff7b66',
    fontSize: 14,
    fontWeight: 'bold',
    height: 0,
  },
  infoActivated: {
    height: 20,
  },
  button: {backgroundColor: '#FA806B'},
});
