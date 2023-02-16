import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {type ButtonsContainerProps} from './Types';
import Button from './Button';
import {checkAmountForDisable} from './services';

const ButtonsContainer = ({
  onRequestPress,
  onSendPress,
  amount,
}: ButtonsContainerProps) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(checkAmountForDisable(amount));
  }, [amount]);

  return (
    <View style={styles.buttonsContainer}>
      <Button disabled={disabled} title="Request" onPress={onRequestPress} />
      <Button disabled={disabled} title="Send" onPress={onSendPress} />
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
