import React from 'react';
import { View } from 'react-native';
import styles from '../common/styles';
import Menu from '../Menu';
import MainView from '../MainView';

function Game() {
  return (
    <View style={styles.screenStyle}>
      <Menu />
      <MainView />
    </View>
  );
}

export default Game;
