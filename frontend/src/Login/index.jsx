import React, { useState } from 'react';
import {
  View, StyleSheet, Text, Alert,
  ImageBackground,
  TouchableHighlight, KeyboardAvoidingView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { login, LOGIN_SUCCESS } from './actionCreator';

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
  const navigation = useNavigation();
  const { error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    const name = username.toLowerCase().trim();
    if (name === '' || password === '') {
      return showAlert('All the input fields are required.');
    }
    if (password.length < 8) {
      return showAlert('Password must longer than 8.');
    }
    const { type } = await dispatch(login(name, password));
    if (type === LOGIN_SUCCESS) {
      return navigation.navigate('Home');
    }
    return showAlert(error.message);
  }

  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={background}
    >
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
