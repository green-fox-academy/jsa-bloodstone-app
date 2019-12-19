import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import goldIcon from '../../assets/gold.png';

import commonStyles from './styles';

import UpgradeBuilding from './UpgradeBuilding';

function MineDetail({
  goldGenerateRate,
  buildingLevel,
  upgradeBuildingGoldCost,
  upgradeBuildingTimeCost,
}) {
  return (
    <View>
      <View style={commonStyles.row}>
        <Text style={commonStyles.textStyle}>The gold </Text>
        <Image resizeMode="contain" source={goldIcon} style={commonStyles.iconStyle} />
        <Text style={commonStyles.textStyle}>{` generation rate is ${goldGenerateRate}/minute. `}</Text>
      </View>
      <UpgradeBuilding
        buildingLevel={buildingLevel}
        upgradeBuildingGoldCost={upgradeBuildingGoldCost}
        upgradeBuildingTimeCost={upgradeBuildingTimeCost}
      />
    </View>
  );
}

MineDetail.propTypes = {
  goldGenerateRate: PropTypes.number,
  buildingLevel: PropTypes.number.isRequired,
  upgradeBuildingGoldCost: PropTypes.number.isRequired,
  upgradeBuildingTimeCost: PropTypes.number.isRequired,
};

MineDetail.defaultProps = {
  goldGenerateRate: 0,
};

export default MineDetail;
