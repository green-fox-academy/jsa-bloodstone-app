import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';
import TouchableImage from './TouchableImage';
import buttomImage1 from '../../assets/menu/Buildings.png';
import buttomImage2 from '../../assets/menu/Troops.png';
import buttomImage3 from '../../assets/menu/Battle.png';
import buttomImage4 from '../../assets/menu/Leaderboard.png';

export default function Menu() {
  const [isPressed, setPressed] = useState('Buildings');

  useEffect(() => { }, [isPressed]);

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
      flexDirection: 'row',
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').width * 0.22,
      backgroundColor: 'rgba(255, 255, 255, .8)',
      borderRadius: 3,
    }}
    >
      <TouchableImage src={buttomImage1} name="Buildings" onPress={handlePress} isPressed={isPressed} />
      <TouchableImage src={buttomImage2} name="Troops" onPress={handlePress} isPressed={isPressed} />
      <TouchableImage src={buttomImage3} name="Battle" onPress={handlePress} isPressed={isPressed} />
      <TouchableImage src={buttomImage4} name="Leaderboard" onPress={handlePress} isPressed={isPressed} />

      <Text style={{ color: 'white' }}>{isPressed}</Text>
    </View>
  );
}
