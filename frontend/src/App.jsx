import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import store from './store';
<<<<<<< HEAD
import TabNavigator from './Navigation';

const AppContainer = createAppContainer(TabNavigator);
=======
//import Troop from './Troop';
import Menu from './Menu';
import Buildings from './Buildings';
import commonStyles from './common/styles';
>>>>>>> c87cc99... JSAB2-36, add redux for buildings

function App() {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <AppContainer />
=======
      <View style={commonStyles.container}>
        <Menu />
        {/* <Troop /> */}
        <Buildings />
      </View>
>>>>>>> c87cc99... JSAB2-36, add redux for buildings
    </Provider>
  );
}

export default registerRootComponent(App);
