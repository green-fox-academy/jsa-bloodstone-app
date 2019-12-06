import React from 'react';
import {
  View, Image, Text,
  StyleSheet,
} from 'react-native';
import { CardView } from '../common/components';
import troopAvatar from '../../assets/troop/troop-avatar.jpg';
import attackIcon from '../../assets/troop/attack.png';
import defenceIcon from '../../assets/troop/defence.png';
import cookieIcon from '../../assets/troop/cookie.png';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    lineHeight: 20,
  },
  troopAvatar: {
    width: 80,
    height: 80,
    marginRight: 24,
    borderRadius: 10,
  },
  fieldStyle: {
    flexDirection: 'row',
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
});

function TroopInformation() {
  return (
    <CardView style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image style={styles.troopAvatar} source={troopAvatar} />
      <View>
        <View style={styles.fieldStyle}>
          <Text style={styles.textStyle}>Attack: 35</Text>
          <Image resizeMode="contain" source={attackIcon} style={styles.iconStyle} />
        </View>
        <View style={styles.fieldStyle}>
          <Text style={styles.textStyle}>Defence: 35</Text>
          <Image resizeMode="contain" source={defenceIcon} style={styles.iconStyle} />
        </View>
        <View style={styles.fieldStyle}>
          <Text style={styles.textStyle}>Sustenance: 23</Text>
          <Image resizeMode="contain" source={cookieIcon} style={styles.iconStyle} />
        </View>
      </View>
    </CardView>
  );
}

export default TroopInformation;
