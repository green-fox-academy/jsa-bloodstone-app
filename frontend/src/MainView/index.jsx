import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Troop from '../Troop';
import Leaderboard from '../Leaderboard';
import Buildings from '../Buildings';

function MainView() {
  const currentlyDisplayComponent = useSelector((state) => state.menu.currentlyDisplayComponent);
  let componentToRender;
  switch (currentlyDisplayComponent) {
    case 'Buildings':
      componentToRender = <Buildings />;
      break;
    case 'Troops':
      componentToRender = <Troop />;
      break;
    case 'Battle':
      componentToRender = <Troop />;
      break;
    case 'Leaderboard':
      componentToRender = <Leaderboard />;
      break;
    default:
      throw new Error('invalid currentlyDisplayComponent');
  }

  return (
    <View>
      {componentToRender}
    </View>
  );
}

export default MainView;
