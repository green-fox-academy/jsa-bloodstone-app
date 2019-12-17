import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableHighlight,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { SubCardView } from '../common/components';
import goldIcon from '../../assets/gold.png';
import troopIcon from '../../assets/troop/troop.png';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    color: '#fff',
  },
  imageStyle: {
    width: 32,
    height: 32,
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
  description: {
    marginLeft: 12,
  },
});

function AcademyButtons({ createTroops, upgrade }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={createTroops} style={{ padding: 3 }}>
        <SubCardView>
          <Image resizeMode="contain" source={troopIcon} style={styles.imageStyle} />
          <View style={styles.description}>
            <Text style={styles.textStyle}>Create troop level 1</Text>
            <View style={styles.row}>
              <Text style={styles.textStyle}>10 </Text>
              <Image resizeMode="contain" source={goldIcon} style={styles.iconStyle} />
              <Text style={styles.textStyle}> 1:00</Text>
            </View>
          </View>
        </SubCardView>
      </TouchableHighlight>
      <TouchableHighlight onPress={upgrade} style={{ padding: 3 }}>
        <SubCardView>
          <View>
            <Entypo name="arrow-with-circle-up" size={32} color="white" />
          </View>
          <View style={styles.description}>
            <Text style={styles.textStyle}>Upgrade to Level 2</Text>
            <View style={styles.row}>
              <Text style={styles.textStyle}>200 </Text>
              <Image resizeMode="contain" source={goldIcon} style={styles.iconStyle} />
              <Text style={styles.textStyle}> 2:30</Text>
            </View>
          </View>
        </SubCardView>
      </TouchableHighlight>
    </View>
  );
}

AcademyButtons.propTypes = {
  createTroops: PropTypes.func,
  upgrade: PropTypes.func,
};

AcademyButtons.defaultProps = {
  createTroops: null,
  upgrade: null,
};

export default AcademyButtons;
