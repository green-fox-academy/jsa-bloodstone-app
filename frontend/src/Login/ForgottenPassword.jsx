/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import {
  View, StyleSheet, Text,
  ImageBackground, Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import { InputField, SubmitButton } from '../common/components';
import { forgotPassword } from './actionCreator';
import validation from '../common/helper';
import background from '../../assets/login/background.jpg';
import Colors from '../common/colors';

import { forgotPassword } from './actionCreator';
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
  button: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
});

function showAlert(text) {
  Alert.alert('Warning', text);
}

function ForgottenPassword() {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const USERNAME_BLACKLIST = ['admin', 'root'];

  function handleSubmit() {
    if (input === '') {
      return showAlert('The input field is required.');
    }
    if (input.length <= 3) {
      return showAlert('Please enter a valid username.');
    }
    if (!validation(input) && USERNAME_BLACKLIST.includes(input.toLowerCase())) {
      return showAlert('Please reenter a valid email or username');
    }
    dispatch(forgotPassword(input));
    return navigation.pop();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={background}
      >
        <Text style={styles.header}>Forget Password</Text>
        <View style={{ width: 300 }}>
          <InputField
            placeholder="Username or Email"
            value={input}
            onChangeText={(text) => setInput(text)}
          />
          <View style={styles.button}>
            <View style={{ transform: [{ rotateY: '180deg' }] }}>
              <SubmitButton onPress={() => navigation.pop()} />
            </View>
            <View>
              <SubmitButton onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default ForgottenPassword;
