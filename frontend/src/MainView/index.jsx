import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Troops from '../Troops';
import Leaderboard from '../Leaderboard';
import Buildings from '../Buildings';

const mainViewstyle = {
  paddingTop: 10,
};

function MainView() {
  const currentlyDisplayComponent = useSelector((state) => state.menu.currentlyDisplayComponent);
  let componentToRender;
  switch (currentlyDisplayComponent) {
    case 'Buildings':
      componentToRender = <Buildings />;
      break;
    case 'Troops':
      componentToRender = <Troops />;
      break;
    case 'Battle':
      componentToRender = <Troops />;
      break;
    case 'Leaderboard':
      componentToRender = <Leaderboard />;
      break;
    default:
      throw new Error('invalid currentlyDisplayComponent');
  }

  return (
    <View style={mainViewstyle}>
      {componentToRender}
    </View>
  );
}

export default MainView;
