import React, { useState } from 'react';
import {
  View, StyleSheet, Text,
  ImageBackground, Alert,
  ActivityIndicator, KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { SERVER_URL } from 'react-native-dotenv';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '../Login/actionCreator';

import validation from '../common/helper';
import Colors from '../common/colors';
import commonStyles from '../common/styles';
import background from '../../assets/login/background.jpg';
import { InputField, SubmitButton, Popup } from '../common/components';

const styles = StyleSheet.create({
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
  layoutContainer: {
    width: 300,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
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

function Registration() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [kingdomName, setKingdomName] = useState('');
  const USERNAME_BLACKLIST = ['admin', 'root'];
  const URL = `http://${SERVER_URL}/users/register`;

  function fetchRegister() {
    setIsLoading(true);
    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        email,
        kingdomName,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 400) {
          setIsLoading(false);
          showAlert(`Oops, ${response.message}`);
          return;
        }
        if (response.status === 201) {
          setIsLoading(false);
          Alert.alert('Congratulation', 'Registration Success.');
          dispatch({ type: LOGIN_SUCCESS, payload: response.token });
          navigation.navigate('Map');
          return;
        }
        throw new Error('Unexpected status code');
      })
      .catch((error) => {
        setIsLoading(false);
        showAlert(`Oops, ${error.message}`);
      });
  }

  function handleSubmit() {
    const name = username.toLowerCase();
    if (name === '' || email === '' || password === '') {
      showAlert('All the input fields are required.');
      return;
    }
    if (password.length < 8) {
      showAlert('Password must be at least 8 characters');
      return;
    }
    if (!validation(email)) {
      showAlert('Please enter a valid email');
      return;
    }
    if (USERNAME_BLACKLIST.includes(name.toLowerCase())) {
      showAlert('Please enter a valid username');
      return;
    }
    if (!kingdomName) {
      setKingdomName(`${name}'s Kingdom`);
    }
    fetchRegister();
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
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={commonStyles.keyboardAvoidContainer}
      >
        <View style={styles.layoutContainer}>
          <Text style={styles.header}>Register</Text>
          <InputField
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <InputField
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputField
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <InputField
            placeholder="Kingdom Name"
            value={kingdomName}
            onChangeText={(text) => setKingdomName(text)}
          />
          <View style={styles.buttonContainer}>
            <SubmitButton direction="back" onPress={() => navigation.pop()} />
            <SubmitButton onPress={handleSubmit} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default Registration;
