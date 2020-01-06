import React, { useState, useEffect } from 'react';
import {
  Text, Button, TextInput, StyleSheet,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { Notifications } from 'expo';

import sendNotification from '.';
import { CardView } from '../common/components';

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputStyle: {
    lineHeight: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

function NotificationTestExample() {
  const [token, setToken] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    Notifications.getExpoPushTokenAsync().then((pushToken) => setToken(pushToken));
  }, []);

  function handlePress() {
    sendNotification({ title, body, token })
      .then(() => {
        Toast.show(`${title} - ${body} has been sent.`);
      });
  }
  return (
    <CardView>
      <Text style={styles.textStyle}>Notification</Text>
      <TextInput
        editable={false}
        placeholder="Requesting Expo Token..."
        style={styles.inputStyle}
        value={token}
        onChangeText={(text) => setToken(text)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Body"
        value={body}
        onChangeText={(text) => setBody(text)}
      />
      <Button title="send" onPress={handlePress} disabled={!token} />
    </CardView>
  );
}

export default NotificationTestExample;
