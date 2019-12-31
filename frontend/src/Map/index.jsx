import React from 'react';
import { View, Text } from 'react-native';
import styles from '../common/styles';

function Map() {
  return (
    <View style={[styles.screenStyle,
      { flex: 1, justifyContent: 'center', alignItems: 'center' }]}
    >
      <Text>Mocked Map page</Text>
    </View>
  );
}

export default Map;
