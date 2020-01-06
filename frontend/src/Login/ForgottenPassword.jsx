import React, { useState } from 'react';
import {
  View, StyleSheet, Text,
  ImageBackground, Alert, KeyboardAvoidingView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { InputField, SubmitButton } from '../common/components';
import { forgotPassword } from './actionCreator';
import background from '../../assets/login/background.jpg';
import Colors from '../common/colors';
import commonStyles from '../common/styles';

const styles = StyleSheet.create({
  layoutContainer: {
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
  buttonContainer: {
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
    if (USERNAME_BLACKLIST.includes(input.toLowerCase())) {
      return showAlert('Please reenter a valid username');
    }
    dispatch(forgotPassword(input));
    return navigation.pop();
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
          <Text style={styles.header}>Forget Password</Text>
          <InputField
            placeholder="Username or Email"
            value={input}
            onChangeText={(text) => setInput(text)}
          />
          <View style={styles.buttonContainer}>
            <SubmitButton onPress={() => navigation.pop()} direction="back" />
            <SubmitButton onPress={handleSubmit} direction="forward" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default ForgottenPassword;
