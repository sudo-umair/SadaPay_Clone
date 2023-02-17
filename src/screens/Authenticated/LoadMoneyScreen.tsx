import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {LoadMoneyScreenProps} from '../../navigation/Types';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import Clipboard from '@react-native-clipboard/clipboard';
import {useToast} from 'react-native-toast-notifications';
import Card from '../../components/Authenticated/LoadMoneyScreen/Card';
import {currencyFormatter} from '../../utils/helpers';

const LoadMoneyScreen = ({navigation}: LoadMoneyScreenProps) => {
  const user = useSelector((state: RootState) => state.user);

  const toast = useToast();
  console.log(user);

  const copyAccountNumber = () => {
    Clipboard.setString(user.phone);
    toast.show('Copied to clipboard', {
      type: 'success',
      placement: 'bottom',
      duration: 2000,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerShadowVisible: false,
      statusBarColor: '#ffffff',
    });
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Load money</Text>
      <Text style={styles.subtitle}>
        <Text style={styles.amount}>
          {currencyFormatter(user.monthlyLimit)}{' '}
        </Text>
        incoming limit left this month!
      </Text>
      <Card onPress={copyAccountNumber} account={user.phone} />
    </View>
  );
};

export default LoadMoneyScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
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
  amount: {
    color: '#FA806B',
    fontWeight: 'bold',
  },
});
