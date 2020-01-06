import React, { useState } from 'react';
import {
  View, StyleSheet, Text,
  ImageBackground, Alert,
  TouchableHighlight,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { login } from './actionCreator';

import { InputField, SubmitButton } from '../common/components';
import background from '../../assets/login/background.jpg';
import Colors from '../common/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
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
    color: Colors.whiteColor,
  },
});

const mockedUser = {
  username: 'kyya',
  password: 'password',
};

function showAlert(text) {
  Alert.alert('Warning', text);
}

function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    const name = username.toLowerCase();
    if (name === '' || password === '') {
      return showAlert('All the input fields are required.');
    }
    if (name !== mockedUser.username || password !== mockedUser.password) {
      return showAlert('Wrong username or password.');
    }
    dispatch(login());
    return navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={background}
      >
        <Text style={styles.header}>Login</Text>
        <View style={{ width: 300 }}>
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
            <TouchableHighlight onPress={() => navigation.push('Registration')}>
              <Text style={styles.touchableText}>Register</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ marginTop: 10, alignItems: 'flex-end', width: 300 }}>
          <SubmitButton onPress={handleSubmit} />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Login;
