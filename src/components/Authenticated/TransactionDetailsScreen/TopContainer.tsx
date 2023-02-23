import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  iconFormatter,
  transactionFormatter,
  transactionType,
} from '../HomeScreen/services';
import {type TransactionDetailsScreenProps} from '../../../navigation/Types';
import {useNavigation} from '@react-navigation/native';
import {dateTimeFormatter} from './services';
import {TopContainerProps} from './Types';

type TransactionDetailsScreenNavigationProp =
  TransactionDetailsScreenProps['navigation'];

const TopContainer = ({transaction, user}: TopContainerProps) => {
  const navigation = useNavigation<TransactionDetailsScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: transactionType(transaction.from.phone, user.phone)
          ? '#01d3b0'
          : '#fa806b',
      },
      statusBarColor: transactionType(transaction.from.phone, user.phone)
        ? '#01d3b0'
        : '#fa806b',
    });
  }, [navigation, transaction.from.phone, user.phone]);

  return (
    <View
      style={[
        styles.container,
        transactionType(transaction.from.phone, user.phone)
          ? styles.transactionIncoming
          : styles.transactionOutgoing,
      ]}>
      <Icon
        name={iconFormatter(transaction.from.phone, user.phone)}
        size={100}
        color="white"
      />
      <View>
        <Text style={styles.amount}>
          {transactionFormatter(
            transaction.from.phone,
            user.phone,
            transaction.amount,
          )}
        </Text>
        <Text style={styles.person}>
          From: <Text style={styles.name}>{transaction.from.name}</Text>
        </Text>
        <Text style={styles.person}>
          To: <Text style={styles.name}>{transaction.to}</Text>
        </Text>
        <Text style={styles.date}>{dateTimeFormatter(transaction.date)}</Text>
      </View>
    </View>
  );
};

export default TopContainer;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  transactionIncoming: {
    backgroundColor: '#01d3b0',
  },
  transactionOutgoing: {
    backgroundColor: '#fa806b',
  },
  amount: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  person: {
    color: '#ebebeb',
    fontSize: 18,
    textAlign: 'center',
  },
  name: {
    color: '#ffffff',
  },
  date: {
    marginTop: 10,
    color: '#ebebeb',
    fontSize: 18,
    textAlign: 'center',
  },
});
