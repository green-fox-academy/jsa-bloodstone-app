import React, { useState } from 'react';
import {
  View, StyleSheet, Text,
  ImageBackground, Alert,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { registrationSuccess } from './actionCreator';

import validation from '../common/helper';
import Colors from '../common/colors';
import background from '../../assets/login/background.jpg';
import { InputField, SubmitButton } from '../common/components';

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
    width: '83%',
  },
});

function showAlert(text) {
  Alert.alert('Warning', text);
}

function Registration() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isLoading = useSelector((state) => state.registration.isLoading);
  const registerError = useSelector((state) => state.registration.error);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [kingdomName, setKingdomName] = useState('');
  const USERNAME_BLACKLIST = ['admin', 'root'];

  function handleSubmit() {
    const name = username.toLowerCase();
    if (name === '' || email === '' || password === '') {
      return showAlert('All the input fields are required.');
    }
    if (password.length <= 7) {
      return showAlert('Password must be at least 8 characters');
    }
    if (!validation(email)) {
      return showAlert('Please reenter a valid email');
    }
    if (USERNAME_BLACKLIST.includes(name.toLowerCase())) {
      return showAlert('Please reenter a valid username');
    }
    if (!kingdomName) {
      setKingdomName(`${name}'s Kingdom`);
    }
    dispatch(registrationSuccess());
    if (registerError !== undefined) {
      return showAlert(`Oops, ${registerError.message}`);
    }
    if (isLoading) {
      return <ActivityIndicator size="large" color={Colors.tealColor} />;
    }
    Alert.alert('Congratulation', 'Registration Success.');
    return navigation.navigate('Map');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={background}
      >
        <Text style={styles.header}>Register</Text>
        <View style={{ width: 300 }}>
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
        </View>
        <View style={styles.button}>
          <View style={{ transform: [{ rotateY: '180deg' }] }}>
            <SubmitButton onPress={() => navigation.pop()} />
          </View>
          <View>
            <SubmitButton onPress={handleSubmit} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Registration;
