import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ITransaction} from '../models/Transaction';

// UnAuthenticated Stack

export type UnAuthenticatedStackParamList = {
  Login: undefined;
  Verification: {phone: string};
};

export type LoginScreenProps = NativeStackScreenProps<
  UnAuthenticatedStackParamList,
  'Login'
>;

export type VerificationScreenProps = NativeStackScreenProps<
  UnAuthenticatedStackParamList,
  'Verification'
>;

// Authenticated Stack

export type AuthenticatedStackParamList = {
  Home: undefined;
  LoadMoney: undefined;
  SendAndRequest: undefined;
  TransactionDetails: {transaction: ITransaction};
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

export type TransactionDetailsScreenProps = NativeStackScreenProps<
  AuthenticatedStackParamList,
  'TransactionDetails'
>;
