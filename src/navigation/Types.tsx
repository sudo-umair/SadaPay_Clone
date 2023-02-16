import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthenticatedStackParamList = {
  Home: undefined;
  LoadMoney: undefined;
  SendAndRequest: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  AuthenticatedStackParamList,
  'Home'
>;

export type LoadMoneyScreenProps = NativeStackScreenProps<
  AuthenticatedStackParamList,
  'LoadMoney'
>;

export type SendAndRequestScreenProps = NativeStackScreenProps<
  AuthenticatedStackParamList,
  'SendAndRequest'
>;
