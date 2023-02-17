export interface ButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  style?: object;
  textStyle?: object;
  children?: React.ReactNode;
  isIcon?: boolean;
}
