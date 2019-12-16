import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Dimensions } from 'react-native';
import { TouchableImage } from '../common/components';
import { changeDisplayedComponent } from './actionCreator';
import buildingMenuIcon from '../../assets/menu/Buildings.png';
import troopsMenuIcon from '../../assets/menu/Troops.png';
import battleMenuIcon from '../../assets/menu/Battle.png';
import leaderBoardMenuIcon from '../../assets/menu/Leaderboard.png';

const HEIGHT_RATIO = 0.25;

function Menu() {
  const activeComponent = useSelector((state) => state.menu.currentlyDisplayComponent);
  const dispatch = useDispatch();

  const ICON_LIST = [
    { name: 'Buildings', url: buildingMenuIcon },
    { name: 'Troops', url: troopsMenuIcon },
    { name: 'Battle', url: battleMenuIcon },
    { name: 'Leaderboard', url: leaderBoardMenuIcon },
  ];

  function handlePress(name) {
    dispatch(changeDisplayedComponent(name));
  }

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').width * HEIGHT_RATIO,
          backgroundColor: 'rgba(255, 255, 255, .8)',
          borderRadius: 3,
        }}
      >
        {ICON_LIST.map((element) => (
          <TouchableImage
            key={element.url}
            src={element.url}
            name={element.name}
            onPress={handlePress}
            activeComponent={activeComponent}
          />
        ))}
      </View>
    </View>
  );
}

export default Menu;
