import {StyleSheet, View} from 'react-native';
import React from 'react';
import {type ButtonsContainerProps} from './Types';
import Button from './Button';

const ButtonsContainer = ({
  onRequestPress,
  onSendPress,
}: ButtonsContainerProps) => {
  return (
    <View style={styles.buttonsContainer}>
      <Button title="Send" onPress={onSendPress} />
      <Button title="Request" onPress={onRequestPress} />
    </View>
  );
};

export default ButtonsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: -5,
  },
});
