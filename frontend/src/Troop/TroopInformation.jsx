import React from 'react'
import { View, Image, Text } from 'react-native';
import commonStyles from '../common/styles';
import troopAvatar from '../../assets/troop/troop-avatar.jpg';

function TroopInformation() {
  return (
    <View style={{ marginRight: 24 }}>
      <Image style={{ width: 100, height: 100, borderRadius: 10 }} source={troopAvatar} />
      <Text style={commonStyles.textStyle}>Attack: 35</Text>
      <Text style={commonStyles.textStyle}>Defence: 35</Text>
      <Text style={commonStyles.textStyle}>Sustenance: 23</Text>
    </View>
  )
}

export default TroopInformation;