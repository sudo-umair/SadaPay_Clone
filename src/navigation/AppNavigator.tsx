import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthenticatedStack from './AuthenticatedStack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
