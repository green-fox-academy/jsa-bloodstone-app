import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import TouchableImage from './TouchableImage';
import buttonImage3 from '../../assets/menu/Battle.png';
import buttonImage1 from '../../assets/menu/Buildings.png';
import buttonImage4 from '../../assets/menu/Leaderboard.png';
import buttonImage2 from '../../assets/menu/Troops.png';
import { heightRatio, widthRatio } from '../common/const';

export default function Menu() {
  const [isPressed, setPressed] = useState('Buildings');

  useEffect(() => {}, [isPressed]);

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
          width: Dimensions.get('window').width * widthRatio,
          height: Dimensions.get('window').width * heightRatio,
          backgroundColor: 'rgba(255, 255, 255, .8)',
          borderRadius: 3,
        }}
      >
        <TouchableImage
          src={buttonImage1}
          name="Buildings"
          onPress={handlePress}
          isPressed={isPressed}
        />
        <TouchableImage
          src={buttonImage2}
          name="Troops"
          onPress={handlePress}
          isPressed={isPressed}
        />
        <TouchableImage
          src={buttonImage3}
          name="Battle"
          onPress={handlePress}
          isPressed={isPressed}
        />
        <TouchableImage
          src={buttonImage4}
          name="Leaderboard"
          onPress={handlePress}
          isPressed={isPressed}
        />
      </View>
      <View>
        <Text style={{ color: 'black' }}>{isPressed}</Text>
      </View>
    </View>
  );
}
