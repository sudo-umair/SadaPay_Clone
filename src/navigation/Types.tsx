import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ITransaction} from '../models/Transaction';

// UnAuthenticated Stack

export type UnAuthenticatedStackParamList = {
  Login: undefined;
  Verification: {phone: string};
  Authentication: {phone?: string};
};

export type LoginScreenProps = NativeStackScreenProps<
  UnAuthenticatedStackParamList,
  'Login'
>;

export type VerificationScreenProps = NativeStackScreenProps<
  UnAuthenticatedStackParamList,
  'Verification'
>;

export type AuthenticationScreenProps = NativeStackScreenProps<
  UnAuthenticatedStackParamList,
  'Authentication'
>;

// Authenticated Stack

export type AuthenticatedStackParamList = {
  Home: undefined;
  LoadMoney: undefined;
  SendAndRequest: undefined;
  TransactionDetails: {
    transaction: ITransaction;
  };
  CreateTransaction: {
    amount: number;
    mode: 'transfer' | 'request';
  };
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

export type CreateTransactionScreenProps = NativeStackScreenProps<
  AuthenticatedStackParamList,
  'CreateTransaction'
>;
