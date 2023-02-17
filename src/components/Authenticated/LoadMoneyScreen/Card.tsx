import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {CardProps} from './Types';

const Card = ({onPress, account}: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardHeading}>Receive Local Transfers</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>My SadaPay Account Number</Text>
        <Text style={styles.number}>{account}</Text>
        <Pressable onPress={onPress} style={styles.button}>
          <Icon name="copy1" size={20} color="#FA806B" />
          <Text style={styles.buttonText}>Copy</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
  },
  cardHeading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 10,
  },
  cardTitle: {
    color: 'grey',
    fontSize: 15,
  },
  number: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    marginTop: 10,
    overflow: 'hidden',
  },
  buttonText: {
    color: '#FA806B',
    marginLeft: 8,
    fontWeight: 'bold',
  },
});
