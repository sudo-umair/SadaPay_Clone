import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {type VerificationScreenProps} from '../../navigation/Types';
import {phoneNumberFormatter} from '../../utils/helpers';
import InputRow from '../../components/UnAuthenticated/VerificationScreen/InputRow';

const VerificationScreen = ({navigation, route}: VerificationScreenProps) => {
  const {phone} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerStyle: {
        backgroundColor: '#ff7b66',
      },
      headerShadowVisible: false,
      headerTintColor: '#ffffff',
      statusBarColor: '#ff7b66',
    });
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Verification Code</Text>
        <Text style={styles.subtitle}>
          We've sent it to {phoneNumberFormatter(phone)}
        </Text>
        <InputRow />
      </View>
      <KeyboardAvoidingView behavior="height">
        <Pressable style={({pressed}) => [pressed && styles.button]}>
          <Text style={styles.subtitle}>Didn't receive the code?</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ff7b66',
    padding: 20,
  },
  container: {
    display: 'flex',
    flex: 1,
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

  button: {
    opacity: 0.5,
  },
});
