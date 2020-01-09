import React, { useState } from 'react';
import {
  View, StyleSheet, Text,
  ImageBackground, Alert,
  ActivityIndicator, KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { SERVER_URL } from 'react-native-dotenv';

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
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [kingdomName, setKingdomName] = useState('');
  const USERNAME_BLACKLIST = ['admin', 'root'];
  const URL = `http://${SERVER_URL}/registration`;

  function handleSubmit() {
    const name = username.toLowerCase();
    if (name === '' || email === '' || password === '') {
      showAlert('All the input fields are required.');
      return;
    }
    if (password.length <= 7) {
      showAlert('Password must be at least 8 characters');
      return;
    }
    if (!validation(email)) {
      showAlert('Please reenter a valid email');
      return;
    }
    if (USERNAME_BLACKLIST.includes(name.toLowerCase())) {
      showAlert('Please reenter a valid username');
      return;
    }
    if (!kingdomName) {
      setKingdomName(`${name}'s Kingdom`);
    }
    setIsLoading(true);
    fetch(URL)
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
        throw new Error('An error has occurred, please try later!');
      })
      .then(() => {
        setIsLoading(false);
        Alert.alert('Congratulation', 'Registration Success.');
        navigation.navigate('Map');
      })
      .catch((error) => {
        setIsLoading(false);
        showAlert(`Oops, ${error.message}`);
      });
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
