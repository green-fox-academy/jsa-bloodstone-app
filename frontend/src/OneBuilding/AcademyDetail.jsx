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
    // borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
  textStyle: {
    lineHeight: 24,
  },
});

function AcademyDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        You can create troops in your Academy. The higher level your Academy is,
        the stronger your troops are.
        {'\n'}
      </Text>
      <View>
        <Text style={styles.textStyle}>Every level increases</Text>
        <View style={styles.row}>
          <Text style={styles.textStyle}>1 </Text>
          <Image resizeMode="contain" source={attackIcon} style={styles.iconStyle} />
          <Text style={styles.textStyle}> and 1 </Text>
          <Image resizeMode="contain" source={defenceIcon} style={styles.iconStyle} />
          <Text style={styles.textStyle}> of the Troops.</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.textStyle}>Every Troop eats 1 </Text>
        <Image resizeMode="contain" source={cookieIcon} style={styles.iconStyle} />
        <Text style={styles.textStyle}> every minute.</Text>
      </View>
      <AcademyButtons createTroops={null} upgrade={null} />
    </View>
  );
}

export default AcademyDetail;
