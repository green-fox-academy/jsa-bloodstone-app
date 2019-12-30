import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Font from 'expo-font';
import { registerRootComponent, AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import store from './store';
import TabNavigator from './Navigation';

import Roboto from '../assets/fonts/Roboto-Regular.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';

const AppContainer = createAppContainer(TabNavigator);

function App() {
  const [fontLoading, setFontLoading] = useState(true);
  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          Roboto,
          Roboto_Bold: RobotoBold,
        });
        setFontLoading(false);
      } catch (error) {
        Alert.alert('Failed to load custom Font');
      }
    }
    loadFonts();
  }, []);

  return fontLoading ? <AppLoading />
    : (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
}

export default registerRootComponent(App);
