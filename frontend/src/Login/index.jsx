import React, { useState } from 'react';
import {
  View, StyleSheet, Text,
  ImageBackground, Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { login } from './actionCreator';
import Colors from '../common/colors';
import background from '../../assets/login/background.jpg';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

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
        </View>
        <View style={{ marginTop: 50, alignItems: 'flex-end', width: 300 }}>
          <SubmitButton onPress={handleSubmit} />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Login;
