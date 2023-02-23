import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import AuthenticatedStack from './AuthenticatedStack';
import UnAuthenticatedStack from './UnAuthenticatedStack';
import LoadingScreen from '../screens/LoadingScreen';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../redux/store';
import {setIsLoggedIn} from '../redux/app.slice';
import {setType} from '../redux/user.slice';

const AppNavigator = () => {
  const appState = useSelector((state: RootState) => state.app);
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const prepare = async () => {
      const {phone} = user;

      if (phone) {
        dispatch(setIsLoggedIn(true));
        dispatch(setType({type: 'login'}));
        return;
      }
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
