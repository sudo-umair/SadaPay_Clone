import {StyleSheet, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {transactions} from './transactions';
import {type ITransaction} from '../../../models/Transaction';
import TransactionItem from './TransactionItem';

const TransactionsList = () => {
  return (
    <ScrollView
      style={styles.rootContainer}
      horizontal={true}
      nestedScrollEnabled={true}>
      <FlatList
        data={transactions}
        renderItem={({item, index}) => (
          <TransactionItem item={item} index={index} />
        )}
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
});
