import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import AuthenticatedStack from './AuthenticatedStack';
import UnAuthenticatedStack from './UnAuthenticatedStack';
import LoadingScreen from '../screens/LoadingScreen';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../redux/store';
import {setIsAuthenticated} from '../redux/app.slice';
import {setType} from '../redux/user.slice';

const AppNavigator = () => {
  const appState = useSelector((state: RootState) => state.app);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const prepare = async () => {
      dispatch(setIsAuthenticated(false));
      dispatch(setType({type: 'login'}));
    };
    prepare();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (appState.isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {!appState.isAuthenticated ? (
        <UnAuthenticatedStack />
      ) : (
        <AuthenticatedStack />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
