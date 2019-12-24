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
    fontSize: 36,
    color: Colors.textColor,
    fontWeight: 'bold',
  },
  labelText: {
    width: 240,
    fontSize: 16,
    color: Colors.textColor,
  },
  buttonRow: {
    width: 240,
    height: 60,
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
  },
  container: {
    paddingTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },
});

function Settings() {
  const [emailInput, setEmailInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [kingdomNameInput, setKingdomNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  function handleEmailSubmit() {
    Alert.alert(`submit email ${emailInput}`);
  }

  function handleUsernameSubmit() {
    Alert.alert(`submit username ${usernameInput}`);
  }

  function handleKingdomNameSubmit() {
    Alert.alert(`submit kingdom ${kingdomNameInput}`);
  }

  function handlePasswordSubmit() {
    Alert.alert(`submit password${passwordInput}`);
  }

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
        <View style={styles.buttonRow}>
          {emailInput !== '' && <SubmitButton onPress={handleEmailSubmit} />}
        </View>

        <Text style={styles.labelText}>username</Text>
        <InputField
          placeholder={useSelector((state) => state.settings.username)}
          value={usernameInput}
          onChangeText={(val) => setUsernameInput(val)}
        />
        <View style={styles.buttonRow}>
          {usernameInput !== '' && <SubmitButton onPress={handleUsernameSubmit} />}
        </View>

        <Text style={styles.labelText}>kingdom name</Text>
        <InputField
          placeholder={useSelector((state) => state.settings.kingdomName)}
          value={kingdomNameInput}
          onChangeText={(val) => setKingdomNameInput(val)}
        />
        <View style={styles.buttonRow}>
          {kingdomNameInput !== '' && <SubmitButton onPress={handleKingdomNameSubmit} />}
        </View>

        <Text style={styles.labelText}>password</Text>
        <InputField
          placeholder="password123"
          value={passwordInput}
          onChangeText={(val) => setPasswordInput(val)}
        />
        <View style={styles.buttonRow}>
          {passwordInput !== '' && <SubmitButton onPress={handlePasswordSubmit} />}
        </View>
      </View>
    </ImageBackground>
  );
}

export default Settings;
