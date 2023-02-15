import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {LoadMoneyScreenProps} from '../../navigation/Types';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import Clipboard from '@react-native-clipboard/clipboard';
import {useToast} from 'react-native-toast-notifications';

const LoadMoneyScreen = ({navigation}: LoadMoneyScreenProps) => {
  const user = useSelector((state: RootState) => state.user);

  const toast = useToast();
  console.log(user);

  const copyAccountNumber = () => {
    Clipboard.setString(user.phone);
    toast.show('Copied to clipboard', {
      type: 'success',
      placement: 'bottom',
      duration: 2000,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackButtonMenuEnabled: true,
      headerTitle: '',
      headerShadowVisible: false,
    });
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Load money</Text>
      <Text style={styles.subtitle}>
        <Text style={styles.amount}>Rs. {user.amount} </Text>
        incoming limit left this month!
      </Text>

      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Receive Local Transfers</Text>
        <View style={styles.card}>
          <Text style={styles.cardSubtitle}>My SadaPay Account Number</Text>
          <Text style={styles.number}>{user.monthlyLimit}</Text>
          <Pressable onPress={copyAccountNumber} style={styles.button}>
            <Icon name="copy1" size={20} color="#FA806B" />
            <Text style={styles.buttonText}>Copy</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoadMoneyScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
  },
  amount: {
    color: '#FA806B',
    fontWeight: 'bold',
  },
  cardContainer: {
    marginTop: 20,
  },
  cardTitle: {
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
  cardSubtitle: {
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
