import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState, useRef} from 'react';
import NumberInput from '../../UI/NumberInput';

const InputRow = () => {
  const inputRef1 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef2 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef3 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef4 = useRef() as React.MutableRefObject<TextInput>;

  const [input, setInput] = useState({
    '1': '',
    '2': '',
    '3': '',
    '4': '',
  });

  const onChangeInput = (text: string, index: number) => {
    setInput(prevState => {
      return {
        ...prevState,
        [index]: text,
      };
    });
  };

  return (
    <View style={styles.inputContainer}>
      <NumberInput
        onChangeText={onChangeInput}
        index={1}
        value={input[1]}
        innerRef={inputRef1}
        nextRef={inputRef2}
        previousRef={inputRef1}
        autoFocus={true}
      />
      <NumberInput
        value={input[2]}
        index={2}
        innerRef={inputRef2}
        previousRef={inputRef1}
        nextRef={inputRef3}
        onChangeText={onChangeInput}
      />
      <NumberInput
        value={input[3]}
        index={3}
        innerRef={inputRef3}
        previousRef={inputRef2}
        nextRef={inputRef4}
        onChangeText={onChangeInput}
      />
      <NumberInput
        value={input[4]}
        index={4}
        innerRef={inputRef4}
        previousRef={inputRef3}
        nextRef={inputRef4}
        onChangeText={onChangeInput}
        onSubmitEditing={() => {
          console.log(input);
        }}
      />
    </View>
  );
};

export default InputRow;

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 30,
  },
});
