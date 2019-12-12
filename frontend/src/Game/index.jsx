import React from 'react';
import { View } from 'react-native';
import styles from '../common/styles';
import Menu from '../Menu';
import Buildings from '../Buildings';

function Game() {
  return (
    <View style={styles.screenStyle}>
      <Menu />
      <Buildings />
    </View>
  );
}

export default Game;
