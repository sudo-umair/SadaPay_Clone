import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {type HomeScreenProps} from '../../navigation/Types';
import TopContainer from '../../components/Authenticated/HomeScreen/TopContainer';
import TransactionsList from '../../components/Authenticated/HomeScreen/TransactionsList';

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <ScrollView style={styles.rootContainer} nestedScrollEnabled={true}>
      <TopContainer />
      <TransactionsList />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#F2F6F7',
  },
});
