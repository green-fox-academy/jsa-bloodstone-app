import React from 'react';
import { View } from 'react-native';
import { registerRootComponent } from 'expo';
import Troop from './Troop';
import Menu from './Menu';
import commonStyles from './common/styles';

function App() {
  return (
    <View style={commonStyles.container}>
      <Menu />
      <Troop />
    </View>
  );
}

export default registerRootComponent(App);
