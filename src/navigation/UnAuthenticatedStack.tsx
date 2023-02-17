import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnAuthenticatedStackParamList} from './Types';
//screens
import LoginScreen from '../screens/UnAuthenticated/LoginScreen';
import VerificationScreen from '../screens/UnAuthenticated/VerificationScreen';

const Stack = createNativeStackNavigator<UnAuthenticatedStackParamList>();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
