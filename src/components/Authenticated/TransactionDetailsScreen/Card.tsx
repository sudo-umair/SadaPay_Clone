import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardProps} from './Types';

const Card = ({transaction}: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>From</Text>
          <Text style={styles.detail}>{transaction.from.name}</Text>
          <Text style={styles.detail}>{transaction.from.phone}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>To</Text>
          <Text style={styles.detail}>{transaction.to}</Text>
        </View>
        <View style={styles.break} />
        <View style={styles.row}>
          <Text style={styles.label}>Reference Number</Text>
          <Text style={styles.detail}>{transaction._id}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 3,
    backgroundColor: '#ffffff',
  },
  container: {
    margin: 15,
    marginTop: 25,
    padding: 20,
    display: 'flex',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 15,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    color: '#6e6e6e',
    fontSize: 16,
    marginBottom: 5,
  },
  detail: {
    color: '#292929',
    fontSize: 18,
  },
  break: {
    borderBottomColor: '#a0a0a0',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
