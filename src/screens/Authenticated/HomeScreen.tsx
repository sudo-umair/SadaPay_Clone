import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import TopContainer from '../../components/HomeScreen/TopContainer';
import {type HomeScreenProps} from '../../navigation/Types';
import TransactionsList from '../../components/HomeScreen/TransactionsList';

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
