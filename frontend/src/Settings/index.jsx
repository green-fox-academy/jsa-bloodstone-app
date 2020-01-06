import React from 'react';
import { View, Text } from 'react-native';
import styles from '../common/styles';
import NotificationTestExample from '../Notification/NotificationTestExample';

function Settings() {
  return (
    <View style={[styles.screenStyle,
      { flex: 1, justifyContent: 'center', alignItems: 'center' }]}
    >
      <Text>Mocked Settings</Text>
      <NotificationTestExample />
    </View>
  );
}

export default Settings;
