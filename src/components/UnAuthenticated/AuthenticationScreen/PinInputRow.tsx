import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState, useRef} from 'react';
import NumberInput from '../../UI/NumberInput';
import {useDispatch} from 'react-redux';
import {type AppDispatch} from '../../../redux/store';
import {setIsAuthenticated} from '../../../redux/app.slice';

const PinInputRow = () => {
  const inputRef1 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef2 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef3 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef4 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef5 = useRef() as React.MutableRefObject<TextInput>;

  const [input, setInput] = useState({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
  });

  const dispatch = useDispatch<AppDispatch>();

  const onChangeInput = (text: string, index: number) => {
    setInput(prevState => {
      return {
        ...prevState,
        [index]: text,
      };
    });
  };

  const onSubmitEditing = () => {
    dispatch(setIsAuthenticated(true));
  };

  return (
    <View style={styles.inputContainer}>
      <NumberInput
        onChangeText={onChangeInput}
        index={1}
        style={styles.input}
        value={input[1]}
        innerRef={inputRef1}
        nextRef={inputRef2}
        previousRef={inputRef1}
        autoFocus={true}
        secureTextEntry={true}
      />
      <NumberInput
        value={input[2]}
        style={styles.input}
        index={2}
        innerRef={inputRef2}
        previousRef={inputRef1}
        nextRef={inputRef3}
        onChangeText={onChangeInput}
        secureTextEntry={true}
      />
      <NumberInput
        value={input[3]}
        index={3}
        style={styles.input}
        innerRef={inputRef3}
        previousRef={inputRef2}
        nextRef={inputRef4}
        onChangeText={onChangeInput}
        secureTextEntry={true}
      />
      <NumberInput
        value={input[4]}
        index={4}
        style={styles.input}
        innerRef={inputRef4}
        previousRef={inputRef3}
        nextRef={inputRef5}
        onChangeText={onChangeInput}
        secureTextEntry={true}
      />
      <NumberInput
        value={input[5]}
        index={5}
        style={styles.input}
        innerRef={inputRef5}
        previousRef={inputRef4}
        onChangeText={onChangeInput}
        secureTextEntry={true}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

export default PinInputRow;

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  input: {
    fontSize: 25,
  },
});
