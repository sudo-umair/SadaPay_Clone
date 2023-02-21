import {
  StyleProp,
  TextInput,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';

export interface InputProps {
  innerRef?: React.RefObject<TextInput>;
  previousRef?: React.RefObject<TextInput>;
  nextRef?: React.RefObject<TextInput>;
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  autoFocus?: boolean;
  style?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  secureTextEntry?: boolean;
  placeholder?: string;
}
