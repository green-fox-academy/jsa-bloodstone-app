import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import buttomImage1 from '../../assets/menu/Buildings.png';
import buttomImage2 from '../../assets/menu/Troops.png';
import buttomImage3 from '../../assets/menu/Battle.png';
import buttomImage4 from '../../assets/menu/Leaderboard.png';

export default function Menu() {
  function handlePress() {
    // TODO
  }

  const renderButton = (src, names) => (
    <TouchableHighlight underlayColor="transparent" onPress={handlePress} style={{ width: '25%', height: '100%' }}>
      <View style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Image source={src} style={{ width: '60%', height: '62%' }} />
        <Text style={{ color: '#55565a' }}>{ names }</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={{
      flexDirection: 'row',
      top: 0,
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').width * 0.22,
      backgroundColor: 'rgba(255, 255, 255, .8)',
      borderRadius: 3,
    }}
    >
      {renderButton(buttomImage1, 'Buildings')}
      {renderButton(buttomImage2, 'Troops')}
      {renderButton(buttomImage3, 'Battle')}
      {renderButton(buttomImage4, 'Leaderboard')}
    </View>
  );
}
