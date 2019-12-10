import React from 'react';
import { View } from 'react-native';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import store from './store';
import Troop from './Troop';
import Menu from './Menu';
import commonStyles from './common/styles';

function App() {
  return (
    <View style={commonStyles.container}>
      <Menu />
      <Troop />
    </View>
  );
}

function reduxApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default registerRootComponent(reduxApp);
