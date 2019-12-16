import React from 'react';
import { View } from 'react-native';
import styles from '../common/styles';
import Menu from '../Menu';
import MainView from '../MainView';
import Resource from '../Resource';

function Game() {
  return (
    <View style={styles.screenStyle}>
      <Menu />
      <Resource />
      <MainView />
    </View>
  );
}

export default Game;
