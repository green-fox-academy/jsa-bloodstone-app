import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TouchableImage } from '../common/components';
import buildingMenuIcon from '../../assets/menu/Buildings.png';
import troopsMenuIcon from '../../assets/menu/Troops.png';
import battleMenuIcon from '../../assets/menu/Battle.png';
import leaderBoardMenuIcon from '../../assets/menu/Leaderboard.png';

const HEIGHT_RATIO = 0.25;

function Menu() {
  const [isPressed, setPressed] = useState('Buildings');

  const ICON_LIST = [
    { name: 'Buildings', url: buildingMenuIcon },
    { name: 'Troops', url: troopsMenuIcon },
    { name: 'Battle', url: battleMenuIcon },
    { name: 'Leaderboard', url: leaderBoardMenuIcon },
  ];

  function handlePress(name) {
    setPressed(name);
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
            isPressed={isPressed}
          />
        ))}
      </View>
      <View>
        <Text style={{ color: 'black' }}>{isPressed}</Text>
      </View>
    </View>
  );
}

export default Menu;
