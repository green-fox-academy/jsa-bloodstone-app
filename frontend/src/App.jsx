import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Font from 'expo-font';
import { registerRootComponent, AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import Roboto from 'native-base/Fonts/Roboto.ttf';
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import TabNavigator from './Navigation';

const AppContainer = createAppContainer(TabNavigator);

function App() {
  const [fontLoading, setFontLoading] = useState(true);
  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          Roboto,
          Roboto_medium: RobotoMedium,
          ...Ionicons.font,
        });
        setFontLoading(false);
      } catch (err) {
        Alert.alert(
          'Failed to load custom Font',
        );
      }
    }
    loadFont();
  }, []);
  return fontLoading
    ? <AppLoading />
    : (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <AppContainer />
          </Root>
        </PersistGate>
      </Provider>
    );
}

export default registerRootComponent(App);
