import React, { useState } from 'react';
import {
  View, StyleSheet, Text, Alert,
  ImageBackground, ActivityIndicator,
  TouchableHighlight, KeyboardAvoidingView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { login } from './actionCreator';

import { InputField, SubmitButton } from '../common/components';
import background from '../../assets/login/background.jpg';
import Colors from '../common/colors';
import commonStyles from '../common/styles';

const styles = StyleSheet.create({
  layoutContainer: {
    alignSelf: 'center',
    width: 300,
  },
  header: {
    width: 300,
    marginVertical: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.whiteColor,
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableText: {
    fontSize: 15,
    color: Colors.whiteColor,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white20Color,
  },
});

function showAlert(text) {
  Alert.alert('Warning', text);
}

function Login() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth);
  const {isLoading, error} = userInfo;

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    const name = username.toLowerCase().trim();
    if (name === '' || password === '') {
      return showAlert('All the input fields are required.');
    }
    dispatch(login(name, password))
      .then((response) => {
        if (response.type === 'loginSuccess') {
          navigation.navigate('Home');
        }
        if (response.type === 'loginFailure') {
          return showAlert('wrong username or password.');
        }
        return null;
      });
    return null;
  }

  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={background}
    >
      {isLoading && (
        <Popup>
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        </Popup>
      )}
      {/* {error && (
        <Popup>
          <View style={styles.loading}>
            <Text>{message}</Text>
          </View>
        </Popup>
      )} */}
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={commonStyles.keyboardAvoidContainer}
      >
        <View style={styles.layoutContainer}>
          <Text style={styles.header}>Login</Text>
          <InputField
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <InputField
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableHighlight onPress={() => navigation.push('ForgottenPassword')}>
              <Text style={styles.touchableText}>Forgot Password?</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ marginTop: 10, alignItems: 'flex-end', width: 300 }}>
          <SubmitButton onPress={handleSubmit} />
        </View>
        <View style={{ position: 'absolute', bottom: 20 }}>
          <TouchableHighlight onPress={() => navigation.push('Registration')}>
            <Text style={styles.touchableText}>Register ?</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default Login;
