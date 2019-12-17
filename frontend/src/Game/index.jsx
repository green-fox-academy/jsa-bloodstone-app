import React from 'react';
import { View, ImageBackground } from 'react-native';
import styles from '../common/styles';
import Menu from '../Menu';
import MainView from '../MainView';
import Resources from '../Resources';

function Game() {
  return (
    <View style={styles.screenStyle}>
      <Menu />
      <Resources />
      <MainView />
    </View>
  );
}

export default Game;
