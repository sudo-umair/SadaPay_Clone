/**
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import {ToastProvider} from 'react-native-toast-notifications';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastProvider>
            <AppNavigator />
          </ToastProvider>
        </PersistGate>
      </Provider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#000000'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
