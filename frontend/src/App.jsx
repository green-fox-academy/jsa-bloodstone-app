import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import store from './store';
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
