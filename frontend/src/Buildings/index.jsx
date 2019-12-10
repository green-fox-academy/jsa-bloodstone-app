import React from 'react';
import { View, Text } from 'react-native';
import Menu from '../Menu';

function Buildings() {
  return (
    <>
      <Menu />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Mocked Buildings</Text>
      </View>
    </>
  );
}

export default Buildings;
