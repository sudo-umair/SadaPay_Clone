import {
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {transactions} from './transactions';
import {type ITransaction} from '../../../models/Transaction';
import TransactionItem from './TransactionItem';
import ListEmpty from './ListEmpty';
import axiosClient from '../../../api/axios';
import {useSelector} from 'react-redux';
import {type RootState} from '../../../redux/store';

const TransactionsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const user = useSelector((state: RootState) => state.user);
  const {name, phone, token} = user;

  const getTransactions = async () => {
    setIsLoading(true);
    try {
      const response = await axiosClient.post('/transaction/get', {
        phone,
        token,
        name,
      });
      setTransactions(response.data.transactions);
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.container}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      ) : (
        <>
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
              refreshing={isLoading}
              onRefresh={getTransactions}
            />
          </ScrollView>
          {transactions.length === 0 && <ListEmpty />}
        </>
      )}
    </View>
  );
};

export default TransactionsList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
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
  container: {
    flex: 1,
  },
});
