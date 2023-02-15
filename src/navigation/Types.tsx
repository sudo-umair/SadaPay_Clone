import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthenticatedStackParamList = {
  Home: undefined;
  LoadMoney: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  AuthenticatedStackParamList,
  'Home'
>;

export type LoadMoneyScreenProps = NativeStackScreenProps<
  AuthenticatedStackParamList,
  'LoadMoney'
>;
