import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState, useRef} from 'react';
import NumberInput from '../../UI/NumberInput';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '../../../redux/app.slice';
import {type AppDispatch} from '../../../redux/store';
import {type InputRowProps, Input} from './Types';
import {objectData} from './services';
import {useToast} from 'react-native-toast-notifications';
import {setTempUser} from '../../../redux/user.slice';
// import {type VerificationScreenProps} from '../../../navigation/Types';

// type VerificationScreenNavigationProp = VerificationScreenProps['navigation'];
// type VerificationScreenRouteProp = VerificationScreenProps['route'];

const InputRow = ({name, phone, type}: InputRowProps) => {
  const inputRef1 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef2 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef3 = useRef() as React.MutableRefObject<TextInput>;
  const inputRef4 = useRef() as React.MutableRefObject<TextInput>;

  const [input, setInput] = useState<Input>({
    inp1: '',
    inp2: '',
    inp3: '',
    inp4: '',
  });

  const toast = useToast();

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
    const inputCode = objectData(input);
    if (inputCode === '0000') {
      dispatch(setIsLoggedIn(true));
      dispatch(setTempUser({name, phone, type}));
    } else {
      toast.show('Invalid Code', {
        type: 'danger',
        placement: 'bottom',
        duration: 3000,
      });
    }
  };

  return (
    <View style={styles.inputContainer}>
      <NumberInput
        onChangeText={onChangeInput}
        index={'inp1'}
        value={input.inp1}
        innerRef={inputRef1}
        nextRef={inputRef2}
        previousRef={inputRef1}
        autoFocus={true}
      />
      <NumberInput
        value={input.inp2}
        index={'inp2'}
        innerRef={inputRef2}
        previousRef={inputRef1}
        nextRef={inputRef3}
        onChangeText={onChangeInput}
      />
      <NumberInput
        value={input.inp3}
        index={'inp3'}
        innerRef={inputRef3}
        previousRef={inputRef2}
        nextRef={inputRef4}
        onChangeText={onChangeInput}
      />
      <NumberInput
        value={input.inp4}
        index={'inp4'}
        innerRef={inputRef4}
        previousRef={inputRef3}
        nextRef={inputRef4}
        onChangeText={onChangeInput}
        onSubmitEditing={onSubmitEditing}
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
    marginTop: 25,
  },
});
