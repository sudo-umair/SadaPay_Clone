import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {
  dateFormatter,
  timeFormatter,
  iconColorFormatter,
  iconFormatter,
  transactionFormatter,
} from './services';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {type HomeScreenProps} from '../../../navigation/Types';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {type TransactionItemProps} from './Types';

type HomeScreenNavigationProp = HomeScreenProps['navigation'];
// type HomeScreenRouteProp = HomeScreenProps['route'];

const TransactionItem = ({item, index}: TransactionItemProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const user = useSelector((state: RootState) => state.user);

  const goToTransactionDetails = () => {
    navigation.navigate('TransactionDetails', {transaction: item});
  };

  return (
    <Pressable
      onPress={goToTransactionDetails}
      style={styles.renderItemContainer}>
      <View style={styles.top_row}>
        <Text style={[index === 0 ? styles.first_date : styles.date]}>
          {dateFormatter(item.date)}
        </Text>
      </View>
      <View style={styles.bottom_row}>
        <View style={styles.bottom_row_left}>
          <Icon
            name={iconFormatter(item.from.phone, user.phone)}
            size={45}
            color={iconColorFormatter(item.from.phone, user.phone)}
          />
          <View style={styles.bottom_row_left_right}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{timeFormatter(item.date)}</Text>
          </View>
        </View>
        <Text style={styles.title}>
          {transactionFormatter(item.from.phone, user.phone, item.amount)}
        </Text>
      </View>
    </Pressable>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  renderItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  top_row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  bottom_row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  bottom_row_left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom_row_left_right: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
  },
  date: {
    color: 'grey',
    fontSize: 15,
  },
  first_date: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 25,
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  amount: {
    color: 'grey',
    fontSize: 15,
  },
});
