import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import {
  View, Text, Alert, StyleSheet, ImageBackground,
} from 'react-native';
import validation from '../common/helper';
import Colors from '../common/colors';

import background from '../../assets/login/background.jpg';

import { InputField } from '../common/components';
import ErrorPopup from '../ErrorPopup';
import SubmitButton from './SubmitButton';

const styles = StyleSheet.create({
  titleText: {
    margin: 20,
    alignSelf: 'center',
    fontSize: 36,
    color: Colors.whiteColor,
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 16,
    color: Colors.whiteColor,
  },
  buttonRow: {
    height: 60,
    paddingTop: 6,
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignSelf: 'center',
    width: 300,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 60,
  },
  logoutButton: {
    width: 300,
  },
});

function Settings() {
  const error = useSelector((state) => state.settings.error);
  const [emailInput, setEmailInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [kingdomNameInput, setKingdomNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigation = useNavigation();

  function resetForm() {
    setEmailInput('');
    setUsernameInput('');
    setKingdomNameInput('');
    setPasswordInput('');
  }

  function showAlert(text) {
    Alert.alert('Warning', text);
  }

  function handleSubmit() {
    const settings = {};
    let message = '';
    if (emailInput) {
      if (!validation(emailInput)) {
        showAlert('Please reenter a valid email');
        return;
      }
      settings.email = emailInput;
      message += 'Your email has changed.\n';
    }
    if (usernameInput) {
      settings.username = usernameInput;
      message += 'Your username has changed.\n';
    }
    if (kingdomNameInput) {
      settings.kingdom = kingdomNameInput;
      message += 'Your kingdom\'s name has changed.\n';
    }
    if (passwordInput) {
      if (passwordInput.length < 8) {
        showAlert('Password must be at least 8 characters');
        return;
      }
      settings.password = passwordInput;
      message += 'Your password has changed.\n';
    }
    Alert.alert('Settings', message);
    resetForm();
  }

  function handleCancel() {
    navigation.navigate('MyKingdom');
  }

  const submitButtonIsDisabled = emailInput === '' && usernameInput === '' && kingdomNameInput === '' && passwordInput === '';

  if (error) {
    return (
      <ErrorPopup message={`Oops, ${error.message}`} />
    );
  }

  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={background}
    >
      <View style={styles.container}>
        <Text style={styles.titleText}>Settings</Text>

        <Text style={styles.labelText}>Email</Text>
        <InputField
          placeholder={useSelector((state) => state.settings.email)}
          value={emailInput}
          onChangeText={(value) => setEmailInput(value)}
        />

        <Text style={styles.labelText}>Username</Text>
        <InputField
          placeholder={useSelector((state) => state.settings.username)}
          value={usernameInput}
          onChangeText={(value) => setUsernameInput(value)}
        />

        <Text style={styles.labelText}>Enter your new Kingdom Name here</Text>
        <InputField
          placeholder={useSelector((state) => state.settings.kingdomName)}
          value={kingdomNameInput}
          onChangeText={(value) => setKingdomNameInput(value)}
        />

        <Text style={styles.labelText}>Password</Text>
        <InputField
          placeholder="password123"
          value={passwordInput}
          onChangeText={(value) => setPasswordInput(value)}
          secureTextEntry
        />

        <View style={styles.buttonRow}>
          <SubmitButton onPress={handleSubmit} disabled={submitButtonIsDisabled} text="Save" />
          <SubmitButton onPress={handleCancel} text="Cancel" />
        </View>
        <View style={styles.footer}>
          <SubmitButton style={styles.logoutButton} text="Logout" />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Settings;
