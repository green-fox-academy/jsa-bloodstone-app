import React from 'react';
import { View } from 'react-native';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import store from './store';
import Troop from './Troop';
import Menu from './Menu';
import commonStyles from './common/styles';
import { createAppContainer } from 'react-navigation';
import TabNavigator from './Navigation';

const AppContainer = createAppContainer(TabNavigator);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default registerRootComponent(App);
