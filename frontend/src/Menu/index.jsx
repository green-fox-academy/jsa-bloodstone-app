import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TouchableImage } from '../common/components';
import BuildingMenuIcon from '../../assets/menu/Buildings.png';
import TroopsMenuIcon from '../../assets/menu/Troops.png';
import BattleMenuIcon from '../../assets/menu/Battle.png';
import LeaderMenuIcon from '../../assets/menu/Leaderboard.png';

export const HEIGHT_RATIO = 0.25;

export default function Menu() {
  const [isPressed, setPressed] = useState('Buildings');

  useEffect(() => {}, [isPressed]);

  const ICONE_LIST = [
    { name: 'Buildings', url: BuildingMenuIcon },
    { name: 'Troops', url: TroopsMenuIcon },
    { name: 'Battle', url: BattleMenuIcon },
    { name: 'Leaderboard', url: LeaderMenuIcon },
  ];

  function handlePress(name) {
    setPressed(name);
    // switch (isPressed) {
    //   case 'Buildings':
    //     // TODO
    //     break;
    //   case 'Troops':
    //     // TODO
    //     break;
    //   case 'Battle':
    //     // TODO
    //     break;
    //   case 'Leaderboard':
    //     // TODO
    //     break;
    //   default:
    //     setPressed('Buildings');
    //     // TODO
    // }
  }

  return (
    <View style={{
      flexDirection: 'column',
    }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').width * HEIGHT_RATIO,
          backgroundColor: 'rgba(255, 255, 255, .8)',
          borderRadius: 3,
        }}
      >
        {ICONE_LIST.map((element) => (
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
