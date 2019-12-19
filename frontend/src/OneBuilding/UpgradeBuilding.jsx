import React from 'react';
import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { SubCardView } from '../common/components';
import goldIcon from '../../assets/gold.png';

import commonStyles from './styles';

function UpgradeBuilding({
  upgrade,
  buildingLevel,
  upgradeAcademyGoldCost,
  upgradeAcademyTimeCost,
}) {
  return (
    <TouchableHighlight onPress={upgrade} style={{ padding: 3 }}>
      <SubCardView>
        <View>
          <Entypo name="arrow-with-circle-up" size={32} color="white" />
        </View>
        <View style={commonStyles.description}>
          <Text
            style={commonStyles.buttonTextStyle}
          >
            {`Upgrade to Level ${buildingLevel + 1}`}
          </Text>
          <View style={commonStyles.row}>
            <Text style={commonStyles.buttonTextStyle}>{`cost ${upgradeAcademyGoldCost} ` }</Text>
            <Image resizeMode="contain" source={goldIcon} style={commonStyles.iconStyle} />
            <Text
              style={commonStyles.buttonTextStyle}
            >
              {` in ${upgradeAcademyTimeCost} seconds`}
            </Text>
          </View>
        </View>
      </SubCardView>
    </TouchableHighlight>
  );
}

UpgradeBuilding.propTypes = {
  upgrade: PropTypes.func,
  buildingLevel: PropTypes.number.isRequired,
  upgradeAcademyGoldCost: PropTypes.number.isRequired,
  upgradeAcademyTimeCost: PropTypes.number.isRequired,
};

UpgradeBuilding.defaultProps = {
  upgrade: null,
};

export default UpgradeBuilding;
