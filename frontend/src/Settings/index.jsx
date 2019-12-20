import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Button, Alert } from 'react-native';
import styles from '../common/styles';

import InputField from './InputField';

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
    <View style={
      [styles.screenStyle, { flex: 1, justifyContent: 'center', alignItems: 'center' }]
    }
    >
      <View>
        <InputField
          placeholder={useSelector((state) => state.settings.email)}
          onChangeText={(val) => setEmailInput(val)}
        />
        <Button onPress={handleEmailSubmit} />
      </View>
      <View>
        <InputField
          placeholder={useSelector((state) => state.settings.username)}
          onChangeText={(val) => setUsernameInput(val)}
        />
        <Button onPress={handleUsernameSubmit} />
      </View>
      <View>
        <InputField
          placeholder={useSelector((state) => state.settings.kingdomName)}
          onChangeText={(val) => setKingdomNameInput(val)}
        />
        <Button onPress={handleKingdomNameSubmit} />
      </View>
      <View>
        <InputField
          placeholder={useSelector((state) => state.settings.password)}
          onChangeText={(val) => setPasswordInput(val)}
        />
        <Button onPress={handlePasswordSubmit} />
      </View>
    </View>
  );
}

export default Settings;
