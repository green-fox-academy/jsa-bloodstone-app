import React from 'react';
import { View } from 'react-native';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import store from './store';
import Troop from './Troop';
import Menu from './Menu';
import commonStyles from './common/styles';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <Provider store={store}>
      <View style={commonStyles.container}>
        <Menu />
        <Troop />
        <Leaderboard />
      </View>
    </Provider>
  );
}

export default registerRootComponent(App);
