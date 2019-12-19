import React, { useState } from 'react';
import {
  View, StyleSheet, Text,
  ImageBackground, Alert,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import Colors from '../common/colors';
import background from '../../assets/login/background.jpg';

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
});

function ForgetPassword() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  function handleSubmit() {
    const name = username.toLowerCase();
    if (email === '' || name === '' ) {
      return showAlert('All the input fields are required.');
    }
    //dispatch(login());
    return navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={background}
      >
        <Text style={styles.header}>Login</Text>
        <View style={{ width: 300 }}>
          <InputField
            secureTextEntry
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputField
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={{ marginTop: 50, alignItems: 'flex-end', width: 300 }}>
          <SubmitButton onPress={handleSubmit} />
        </View>
      </ImageBackground>
    </View>
  );
}
