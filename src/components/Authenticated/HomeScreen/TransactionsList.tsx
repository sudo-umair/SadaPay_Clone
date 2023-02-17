import {
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import {transactions} from './transactions';
import {type ITransaction} from '../../../models/Transaction';
import {
  dateFormatter,
  timeFormatter,
  transactionFormatter,
  iconColorFormatter,
  iconFormatter,
} from './services';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProps} from '../../../navigation/Types';

type HomeScreenNavigationProp = HomeScreenProps['navigation'];
// type HomeScreenRouteProp = HomeScreenProps['route'];

const RenderItem = ({item, index}: {item: ITransaction; index: number}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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
            name={iconFormatter(item.type)}
            size={45}
            color={iconColorFormatter(item.type)}
          />
          <View style={styles.bottom_row_left_right}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{timeFormatter(item.date)}</Text>
          </View>
        </View>
        <Text style={styles.title}>
          {transactionFormatter(item.type, item.amount)}
        </Text>
      </View>
    </Pressable>
  );
};

const TransactionsList = () => {
  return (
    <ScrollView
      style={styles.rootContainer}
      horizontal={true}
      nestedScrollEnabled={true}>
      <FlatList
        data={transactions}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
        keyExtractor={(item: ITransaction) =>
          item._id.toString() + Math.random().toString()
        }
        nestedScrollEnabled={true}
        style={styles.transactionsList}
      />
    </ScrollView>
  );
};

export default TransactionsList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  transactionsList: {
    flex: 1,
    width: '100%',
  },
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
