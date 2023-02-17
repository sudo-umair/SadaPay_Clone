import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {type ButtonsContainerProps} from './Types';
import Button from '../../UI/Button';
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
      <Button
        style={styles.button}
        disabled={disabled}
        title="Request"
        onPress={onRequestPress}
      />
      <Button
        style={styles.button}
        disabled={disabled}
        title="Send"
        onPress={onSendPress}
      />
    </View>
  );
};

export default ButtonsContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: -5,
  },
  button: {
    width: '45%',
  },
});
