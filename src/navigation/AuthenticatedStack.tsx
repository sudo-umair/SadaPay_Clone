import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticatedStackParamList} from './Types';
//screens
import HomeScreen from '../screens/Authenticated/HomeScreen';
import LoadMoneyScreen from '../screens/Authenticated/LoadMoneyScreen';
import SendAndRequestScreen from '../screens/Authenticated/SendAndRequestScreen';
import TransactionDetailsScreen from '../screens/Authenticated/TransactionDetailsScreen';
import CreateTransactionScreen from '../screens/Authenticated/CreateTransactionScreen';

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          animation: 'default',
        }}
        component={HomeScreen}
      />
      <Stack.Screen name="LoadMoney" component={LoadMoneyScreen} />
      <Stack.Screen name="SendAndRequest" component={SendAndRequestScreen} />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetailsScreen}
      />
      <Stack.Screen
        name="CreateTransaction"
        component={CreateTransactionScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
