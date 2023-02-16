import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {type SendAndRequestScreenProps} from '../../navigation/Types';
import {type CustomHeaderTextProps} from '../../components/SendAndRequestScreen/Types';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import InputAmount from '../../components/SendAndRequestScreen/InputAmount';
import KeyPad from '../../components/SendAndRequestScreen/KeyPad';
import ButtonsContainer from '../../components/SendAndRequestScreen/ButtonsContainer';

const CustomHeaderText = ({balance}: CustomHeaderTextProps) => {
  return (
    <Text style={styles.headerText}>
      Current Balance:{'\n'}
      <Text style={styles.balance}>Rs. {balance}</Text>
    </Text>
  );
};

const SendAndRequestScreen = ({navigation}: SendAndRequestScreenProps) => {
  const user = useSelector((state: RootState) => state.user);

  const [amount, setAmount] = useState(0);
  const [maxSendAmount] = useState(user.balance);

  const [info, setInfo] = useState('Warning');
  const [showInfo, setShowInfo] = useState(false);

  const handleKeyPress = (text: string) => {
    if (text === 'delete') {
      setAmount(curr_amount => {
        const newAmount = curr_amount.toString().slice(0, -1);
        return newAmount === '' ? 0 : Number(newAmount);
      });
    } else {
      if (amount.toString().length === 6) {
        setAmount(999999);
        setInfo('Maximum amount is 999999');
        setShowInfo(true);
        setTimeout(() => {
          setShowInfo(false);
        }, 1200);
      } else if (amount.toString().length < 6) {
        setAmount(curr_amount => {
          const newAmount = curr_amount.toString() + text;
          return Number(newAmount);
        });
      }
    }
  };

  const handleSendPayment = () => {
    if (amount > maxSendAmount) {
      setInfo('Insufficient Balance');
      setShowInfo(true);
      setTimeout(() => {
        setShowInfo(false);
      }, 1000);
    } else {
    }
  };

  const handleRequestPayment = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {backgroundColor: '#f9816e'},
      headerShadowVisible: false,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerTitle: () => <CustomHeaderText balance={user.balance} />,
      headerTintColor: '#ffffff',
      statusBarColor: '#f9816e',
    });
  }, [navigation, user.balance]);

  return (
    <View style={styles.rootContainer}>
      <InputAmount amount={amount} info={info} showInfo={showInfo} />
      <KeyPad onPress={handleKeyPress} />
      <ButtonsContainer
        onSendPress={handleSendPayment}
        onRequestPress={handleRequestPayment}
      />
    </View>
  );
};

export default SendAndRequestScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#f9816e',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    color: '#f0f0f0',
    fontSize: 16,
    display: 'flex',
    width: '75%',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  balance: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
