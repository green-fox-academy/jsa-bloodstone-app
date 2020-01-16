import React from 'react';
import {
  View, Text, Image, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import { SubCardView } from '../common/components';
import goldIcon from '../../assets/gold.png';
import troopIcon from '../../assets/troop/troop.png';

import commonStyles from './styles';

function CreateTroop({
  createTroop,
  buildingLevel,
  createTroopGoldCost,
  createTroopTimeCost,
}) {
  return (
    <TouchableHighlight onPress={createTroop} style={{ padding: 3 }}>
      <SubCardView>
        <Image resizeMode="contain" source={troopIcon} style={commonStyles.imageStyle} />
        <View style={commonStyles.description}>
          <Text style={commonStyles.buttonTextStyle}>
            {`Create troop level ${buildingLevel} `}
          </Text>
          <View style={commonStyles.row}>
            <Text style={commonStyles.buttonTextStyle}>{`cost ${createTroopGoldCost} ` }</Text>
            <Image resizeMode="contain" source={goldIcon} style={commonStyles.iconStyle} />
            <Text style={commonStyles.buttonTextStyle}>
              {` in ${createTroopTimeCost} seconds`}
            </Text>
          </View>
        </View>
      </SubCardView>
    </TouchableHighlight>
  );
}

CreateTroop.propTypes = {
  createTroop: PropTypes.func,
  buildingLevel: PropTypes.number.isRequired,
  createTroopGoldCost: PropTypes.number.isRequired,
  createTroopTimeCost: PropTypes.number.isRequired,
};

CreateTroop.defaultProps = {
  createTroop: null,
};

export default CreateTroop;
