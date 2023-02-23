import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {type AuthenticationScreenProps} from '../../navigation/Types';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../redux/store';
import {
  setIsAuthenticated,
  setIsLoggedIn,
  setIsLoading,
} from '../../redux/app.slice';
import {setType, setUser} from '../../redux/user.slice';
import PinInputRow from '../../components/UnAuthenticated/AuthenticationScreen/PinInputRow';
import axiosClient from '../../api/axios';
import {useToast} from 'react-native-toast-notifications';

const AuthenticationScreen = ({navigation}: AuthenticationScreenProps) => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToast();

  useLayoutEffect(() => {
    navigation.setOptions({
      statusBarColor: '#ff7b66',
    });
  }, [navigation]);

  const onResetPress = () => {
    dispatch(setIsAuthenticated(false));
    dispatch(setIsLoggedIn(false));
    dispatch(setUser({}));
    setType('sign-up');
  };

  const loginHandler = async (input: string) => {
    dispatch(setIsLoading(true));
    await axiosClient
      .post('/user/get', {
        phone: user.phone,
        pin: input,
      })
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          dispatch(setIsAuthenticated(true));
          dispatch(setIsLoggedIn(true));
          dispatch(setUser(res.data.user));
        }
      })
      .catch(err => {
        console.log(err);
        toast.show('Invalid PIN', {
          type: 'danger',
          placement: 'top',
          duration: 3000,
        });
      });
    dispatch(setIsLoading(false));
    console.log('login');
  };

  const signupHandler = async (input: string) => {
    dispatch(setIsLoading(true));
    await axiosClient
      .post('/user/create', {
        name: user.name,
        phone: user.phone,
        pin: input,
      })
      .then(res => {
        console.log(res.data);
        dispatch(setIsAuthenticated(true));
        dispatch(setIsLoggedIn(true));
        dispatch(setUser(res.data.user));
      })
      .catch(err => {
        console.log(err);
        toast.show('Invalid PIN', {
          type: 'danger',
          placement: 'top',
          duration: 3000,
        });
      });
    dispatch(setIsLoading(false));
    console.log('signup');
  };

  const onSubmitEditing = async (input: string) => {
    if (user.type === 'login') {
      loginHandler(input);
    } else if (user.type === 'sign-up') {
      signupHandler(input);
    }
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
      <PinInputRow onSubmit={onSubmitEditing} />
      <Pressable
        onPress={onResetPress}
        style={({pressed}) => [styles.container, pressed && styles.pressed]}>
        <Text style={styles.link}>RESET</Text>
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
    marginTop: 20,
    color: '#ffffff',
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  pressed: {
    opacity: 0.5,
  },
});
