import React, { useState } from 'react';
import {
  View, StyleSheet, Text,
  ImageBackground, Alert,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import Colors from '../common/colors';
import commonStyles from '../common/styles';

import background from '../../assets/login/background.jpg';
import CardTextInput from './CardTextInput';
import NextArrowButton from './NextArrowButton';

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
  errorMessageText: {
    color: Colors.redColor,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

const mockedUser = {
  username: 'kyya',
  password: 'password',
};

function showAlert(text) {
  Alert.alert('Tips', text);
}

function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    if (username === '' || password === '') {
      return showAlert('All the input fields are required.');
    }
    if (username !== mockedUser.username || password !== mockedUser.password) {
      return showAlert('Wrong username or password.');
    }
    return navigation.navigate('MyKingdom');
  }

  return (
    <View style={[commonStyles.container, styles.container]}>
      <ImageBackground
        style={[styles.background, { }]}
        resizeMode="cover"
        source={background}
      >
        <Text style={styles.header}>Login</Text>
        <View style={{ width: 300 }}>
          <CardTextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <CardTextInput
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={{ marginTop: 50, alignItems: 'flex-end', width: 300 }}>
          <NextArrowButton onPress={handleSubmit} />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Login;
