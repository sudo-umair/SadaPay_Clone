import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnAuthenticatedStackParamList} from './Types';
import {useSelector} from 'react-redux';
import {type RootState} from '../redux/store';
//screens
import LoginScreen from '../screens/UnAuthenticated/LoginScreen';
import VerificationScreen from '../screens/UnAuthenticated/VerificationScreen';
import AuthenticationScreen from '../screens/UnAuthenticated/AuthenticationScreen';

const Stack = createNativeStackNavigator<UnAuthenticatedStackParamList>();

const UnAuthenticatedStack = () => {
  const appState = useSelector((state: RootState) => state.app);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {!appState.isLoggedIn ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
        </>
      ) : (
        <Stack.Screen name="Authentication" component={AuthenticationScreen} />
      )}
    </Stack.Navigator>
  );
};

export default UnAuthenticatedStack;
