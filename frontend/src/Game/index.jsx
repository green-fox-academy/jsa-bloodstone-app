import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
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
