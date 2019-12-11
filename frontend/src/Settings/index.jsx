import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../common/styles';

function Settings() {
  return (
    <View style={[Styles.screenStyle, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <Text>Mocked Settings</Text>
    </View>
  );
}

export default Settings;
