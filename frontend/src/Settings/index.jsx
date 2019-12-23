import React, { useState, useEffect } from 'react';
import { Notifications } from 'expo';
import {
  Text, Button, Alert, View,
} from 'react-native';
import { CardView } from '../common/components';
import registerForPushNotificationsAsync from '../Notification/register';
import styles from '../common/styles';

const textStyle = {
  marginBottom: 12,
  fontSize: 18,
  fontWeight: 'bold',
};

function Settings() {
  const [token, setToken] = useState('');

  useEffect(() => {
    Notifications.getExpoPushTokenAsync()
      .then((pushToken) => setToken(pushToken));
  }, []);

  function handlePress() {
    registerForPushNotificationsAsync(
      'Title', 'This is a test notification', {},
    );
    Alert.alert('INFO', 'sent');
  }
  return (
    <View style={styles.container}>
      <CardView>
        <Text style={textStyle}>Notification</Text>
        <Button title="shot" onPress={handlePress} />
        <Text>{token}</Text>
      </CardView>
    </View>
  );
}

export default Settings;
