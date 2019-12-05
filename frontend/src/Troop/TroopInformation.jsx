import React from 'react';
import {
  View, Image, Text,
  StyleSheet,
} from 'react-native';
import { CardView } from '../components';
import commonStyles from '../common/styles';
import troopAvatar from '../../assets/troop/troop-avatar.jpg';

const styles = StyleSheet.create({
  troopAvatar: {
    width: 80,
    height: 80,
    marginRight: 24,
    borderRadius: 10,
  },
});

function TroopInformation() {
  return (
    <CardView style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image style={styles.troopAvatar} source={troopAvatar} />
      <View>
        <Text style={commonStyles.textStyle}>Attack: 35</Text>
        <Text style={commonStyles.textStyle}>Defence: 35</Text>
        <Text style={commonStyles.textStyle}>Sustenance: 23</Text>
      </View>
    </CardView>
  );
}

export default TroopInformation;
