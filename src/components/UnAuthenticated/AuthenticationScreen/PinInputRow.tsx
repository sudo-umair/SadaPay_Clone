import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState, useRef} from 'react';
import NumberInput from '../../UI/NumberInput';
import {type Input, PinInputRowProps} from './Types';
import {objectData} from './services';

const PinInputRow = ({onSubmit}: PinInputRowProps) => {
  const inputRef1 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef2 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef3 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef4 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef5 = useRef() as React.MutableRefObject<TextInput>;

  const [input, setInput] = useState<Input>({
    inp1: '',
    inp2: '',
    inp3: '',
    inp4: '',
    inp5: '',
  });

  const onChangeInput = (text: string, index: string) => {
    setInput(prevState => {
      return {
        ...prevState,
        [index]: text,
      };
    });
  };

  const onSubmitEditing = () => {
    console.log('onSubmitEditing', input);
    const inputString = objectData(input);
    onSubmit(inputString);
  };

  return (
    <View style={styles.inputContainer}>
      <NumberInput
        onChangeText={onChangeInput}
        index={'inp1'}
        style={styles.input}
        value={input.inp1}
        innerRef={inputRef1}
        nextRef={inputRef2}
        previousRef={inputRef1}
        autoFocus={true}
        secureTextEntry={true}
      />
      <NumberInput
        value={input.inp2}
        style={styles.input}
        index={'inp2'}
        innerRef={inputRef2}
        previousRef={inputRef1}
        nextRef={inputRef3}
        onChangeText={onChangeInput}
        secureTextEntry={true}
      />
      <NumberInput
        value={input.inp3}
        index={'inp3'}
        style={styles.input}
        innerRef={inputRef3}
        previousRef={inputRef2}
        nextRef={inputRef4}
        onChangeText={onChangeInput}
        secureTextEntry={true}
      />
      <NumberInput
        value={input.inp4}
        index={'inp4'}
        style={styles.input}
        innerRef={inputRef4}
        previousRef={inputRef3}
        nextRef={inputRef5}
        onChangeText={onChangeInput}
        secureTextEntry={true}
      />
      <NumberInput
        value={input.inp5}
        index={'inp5'}
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
