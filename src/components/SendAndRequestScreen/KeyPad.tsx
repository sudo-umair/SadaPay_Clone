import {StyleSheet, View, Pressable, Text} from 'react-native';
import React from 'react';
import {KEYS} from '../../utils/constants';
import Icon from 'react-native-vector-icons/Entypo';
import {type KeyPadProps} from './Types';

const KeyPad = ({onPress}: KeyPadProps) => {
  return (
    <View style={styles.keysContainer}>
      {KEYS.map(text => {
        return (
          <Pressable
            key={text}
            android_ripple={{color: '#f36c57', borderless: false, radius: 40}}
            onPress={() => onPress(text)}
            disabled={text === ''}
            style={styles.key}>
            {text === 'delete' && (
              <Icon name="circle-with-cross" size={30} color="#ffffff" />
            )}
            {text !== ('delete' || '') && (
              <Text style={styles.keyText}>{text}</Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default KeyPad;

const styles = StyleSheet.create({
  keysContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    columnGap: 5,
    rowGap: 15,
  },
  key: {
    width: '25%',
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
  keyText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
