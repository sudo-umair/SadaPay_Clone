import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import Feather_Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenProps} from '../../navigation/Types';

type HomeScreenNavigationProp = HomeScreenProps['navigation'];
// type HomeScreenRouteProp = HomeScreenProps['route'];

const TopContainer = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const goToLoadMoney = () => {
    navigation.navigate('LoadMoney');
  };

  const goToSendAndRequest = () => {
    navigation.navigate('SendAndRequest');
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log('Pressed');
        }}
        android_ripple={{color: 'white', borderless: false}}
        style={styles.leftColumn}>
        <View style={styles.left_top}>
          <Text style={styles.text}>Current Balance</Text>
          <Text style={styles.balance_amount}>Rs. 69,000</Text>
        </View>
        <View style={styles.left_bottom}>
          <Image
            source={require('../../assets/images/mastercard.png')}
            style={styles.mastercard}
            resizeMode="contain"
          />
          <Feather_Icon name="arrow-right" size={30} color="white" />
        </View>
      </Pressable>
      <View style={styles.rightColumn}>
        <Pressable
          onPress={goToLoadMoney}
          android_ripple={{color: 'white', borderless: false}}
          style={styles.right_top}>
          <Feather_Icon name="arrow-down" size={30} color="white" />
          <Text style={styles.button_text}>Load Money</Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'white', borderless: false}}
          onPress={goToSendAndRequest}
          style={styles.right_bottom}>
          <Feather_Icon
            name="arrow-up-right"
            size={30}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.button_text}>Send & Request</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TopContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 20,
  },
  leftColumn: {
    backgroundColor: '#02d7b4',
    width: '55%',
    padding: 20,
    aspectRatio: 3 / 4.5,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightColumn: {
    width: '42%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  right_top: {
    height: '48%',
    backgroundColor: '#1ea7f7',
    padding: 10,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  right_bottom: {
    backgroundColor: '#FA806B',
    height: '48%',
    padding: 10,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  left_top: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  left_bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  balance_amount: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  mastercard: {
    width: 50,
    height: 30,
  },
  button_text: {
    color: 'white',
    fontSize: 23,
    marginHorizontal: 5,
    marginBottom: 5,
  },
  icon: {
    alignSelf: 'flex-end',
  },
});
