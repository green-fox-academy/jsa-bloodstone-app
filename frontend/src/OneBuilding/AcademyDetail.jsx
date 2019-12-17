import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';

import attackIcon from '../../assets/troop/attack.png';
import defenceIcon from '../../assets/troop/defence.png';
import cookieIcon from '../../assets/troop/cookie.png';
import AcademyButtons from './AcademyButtons';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
});

function AcademyDetail() {
  return (
    <View style={styles.container}>
      <Text style={{ paddingBottom: 10 }}>
        You can create troops in your Academy. The higher level your Academy is,
        the stronger your troops are.
      </Text>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text>Every level increases 1 </Text>
        <Image resizeMode="contain" source={attackIcon} style={styles.iconStyle} />
        <Text> and 1 </Text>
        <Image
          resizeMode="contain"
          source={defenceIcon}
          style={styles.iconStyle}
        />
        <Text> of the Troops.</Text>
      </View>
      <View style={styles.row}>
        <Text>Every Troop eats 1 </Text>
        <Image resizeMode="contain" source={cookieIcon} style={styles.iconStyle} />
        <Text> every minute.</Text>
      </View>
      <AcademyButtons createTroops={null} upgrade={null} />
    </View>
  );
}

export default AcademyDetail;
