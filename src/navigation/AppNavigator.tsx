import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthenticatedStack from './AuthenticatedStack';
import UnAuthenticatedStack from './UnAuthenticatedStack';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const AppNavigator = () => {
  const appState = useSelector((state: RootState) => state.app);

  return (
    <NavigationContainer>
      {appState.isAuthenticated ? (
        <UnAuthenticatedStack />
      ) : (
        <AuthenticatedStack />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
