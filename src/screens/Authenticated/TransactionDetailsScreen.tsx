import {StyleSheet, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {TransactionDetailsScreenProps} from '../../navigation/Types';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import TopContainer from '../../components/Authenticated/TransactionDetailsScreen/TopContainer';
import Card from '../../components/Authenticated/TransactionDetailsScreen/Card';

const TransactionDetailsScreen = ({
  route,
  navigation,
}: TransactionDetailsScreenProps) => {
  const {transaction} = route.params;

  const user = useSelector((state: RootState) => state.user);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: transaction.title,
      headerShown: true,
      headerShadowVisible: false,
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
    });
  }, [navigation, transaction.title]);

  return (
    <View style={styles.rootContainer}>
      <TopContainer user={user} transaction={transaction} />
      <Card transaction={transaction} />
    </View>
  );
};

export default TransactionDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
