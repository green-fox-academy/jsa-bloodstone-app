import React from 'react';
import { View, ImageBackground } from 'react-native';
import Menu from '../Menu';
import MainView from '../MainView';
import background from '../../assets/login/background.jpg';
import commonStyles from '../common/styles';
import Resources from '../Resources';

function Game() {
  return (
    <ImageBackground
      style={commonStyles.background}
      resizeMode="cover"
      source={background}
    >
      <View style={commonStyles.container}>
        <Menu />
        <Resources />
        <MainView />
      </View>
    </ImageBackground>
  );
}

export default Game;
