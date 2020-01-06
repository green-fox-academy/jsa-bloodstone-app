import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  View, Text, Alert, StyleSheet, ImageBackground,
} from 'react-native';
import Colors from '../common/colors';

import background from '../../assets/login/background.jpg';

import InputField from './InputField';
import SubmitButton from './SubmitButton';

const styles = StyleSheet.create({
  titleText: {
    margin: 20,
    fontSize: 36,
    color: Colors.whiteColor,
    fontWeight: 'bold',
  },
  labelText: {
    width: 280,
    fontSize: 16,
    color: Colors.whiteColor,
  },
  buttonRow: {
    width: 280,
    height: 60,
    paddingTop: 6,
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    paddingTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 60,
  },
  logoutButton: {
    width: 280,
  },
});

function Settings() {
  const [emailInput, setEmailInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [kingdomNameInput, setKingdomNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  function handleSubmit() {
    const settings = {};
    let message = '';
    if (emailInput) {
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
      settings.password = passwordInput;
      message += 'Your password has changed.\n';
    }
    Alert.alert('Settings', message);
  }

  const submitButtonIsDisabled = emailInput === '' && usernameInput === '' && kingdomNameInput === '' && passwordInput === '';

  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={background}
    >
      <View style={styles.container}>
        <Text style={styles.titleText}>Settings</Text>

        <Text style={styles.labelText}>email</Text>
        <InputField
          placeholder={useSelector((state) => state.settings.email)}
          value={emailInput}
          onChangeText={(val) => setEmailInput(val)}
        />

        <Text style={styles.labelText}>username</Text>
        <InputField
          placeholder={useSelector((state) => state.settings.username)}
          value={usernameInput}
          onChangeText={(val) => setUsernameInput(val)}
        />

        <Text style={styles.labelText}>Enter your new Kingdom Name here</Text>
        <InputField
          placeholder={useSelector((state) => state.settings.kingdomName)}
          value={kingdomNameInput}
          onChangeText={(val) => setKingdomNameInput(val)}
        />

        <Text style={styles.labelText}>password</Text>
        <InputField
          placeholder="password123"
          value={passwordInput}
          onChangeText={(val) => setPasswordInput(val)}
        />

        <View style={styles.buttonRow}>
          <SubmitButton onPress={handleSubmit} disabled={submitButtonIsDisabled} text="Save" />
          <SubmitButton text="Cancel" />
        </View>
        <View style={styles.footer}>
          <SubmitButton style={styles.logoutButton} text="Logout" />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Settings;
