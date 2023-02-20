import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {type AuthenticationScreenProps} from '../../navigation/Types';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../redux/store';
import {setIsAuthenticated, setIsLoggedIn} from '../../redux/app.slice';

import PinInputRow from '../../components/UnAuthenticated/AuthenticationScreen/PinInputRow';

const AuthenticationScreen = ({navigation}: AuthenticationScreenProps) => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useLayoutEffect(() => {
    navigation.setOptions({
      statusBarColor: '#ff7b66',
    });
  }, [navigation]);

  const onResetPress = () => {
    dispatch(setIsAuthenticated(false));
    dispatch(setIsLoggedIn(false));
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/images/sadapay.png')}
        />
        <Text style={styles.title}>
          <Text style={styles.boldTitle}>SADA</Text>
          PAY
        </Text>
      </View>
      <PinInputRow />
      <Pressable
        onPress={onResetPress}
        style={({pressed}) => [styles.container, pressed && styles.pressed]}>
        <Text style={styles.link}>Reset</Text>
      </Pressable>
    </View>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ff7b66',
    padding: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    aspectRatio: 1,
    width: 100,
    borderWidth: 1,
  },
  title: {
    fontSize: 35,
    color: '#ffffff',
    letterSpacing: 2,
    marginLeft: 10,
  },
  boldTitle: {
    fontWeight: 'bold',
  },
  link: {
    color: '#ffffff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  pressed: {
    opacity: 0.5,
  },
});
