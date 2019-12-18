import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableHighlight,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { SubCardView } from '../common/components';
import goldIcon from '../../assets/gold.png';
import troopIcon from '../../assets/troop/troop.png';

import commonStyles from './styles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
});

function AcademyButtons({ createTroops, upgrade }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={createTroops} style={{ padding: 3 }}>
        <SubCardView>
          <Image resizeMode="contain" source={troopIcon} style={commonStyles.imageStyle} />
          <View style={commonStyles.description}>
            <Text style={commonStyles.buttonTextStyle}>Create troop level 1</Text>
            <View style={commonStyles.row}>
              <Text style={commonStyles.buttonTextStyle}>10 </Text>
              <Image resizeMode="contain" source={goldIcon} style={commonStyles.iconStyle} />
              <Text style={commonStyles.buttonTextStyle}> 1:00</Text>
            </View>
          </View>
        </SubCardView>
      </TouchableHighlight>
      <TouchableHighlight onPress={upgrade} style={{ padding: 3 }}>
        <SubCardView>
          <View>
            <Entypo name="arrow-with-circle-up" size={32} color="white" />
          </View>
          <View style={commonStyles.description}>
            <Text style={commonStyles.buttonTextStyle}>Upgrade to Level 2</Text>
            <View style={commonStyles.row}>
              <Text style={commonStyles.buttonTextStyle}>200 </Text>
              <Image resizeMode="contain" source={goldIcon} style={commonStyles.iconStyle} />
              <Text style={commonStyles.buttonTextStyle}> 2:30</Text>
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
