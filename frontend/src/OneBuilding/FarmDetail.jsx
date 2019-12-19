import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import cookieIcon from '../../assets/troop/cookie.png';

import commonStyles from './styles';

import UpgradeBuilding from './UpgradeBuilding';

function FarmDetail({
  foodGenerateRate,
  buildingLevel,
  upgradeBuildingGoldCost,
  upgradeBuildingTimeCost,
}) {
  return (
    <View>
      <View style={commonStyles.row}>
        <Text style={commonStyles.textStyle}>The food </Text>
        <Image resizeMode="contain" source={cookieIcon} style={commonStyles.iconStyle} />
        <Text style={commonStyles.textStyle}>{` generation rate is ${foodGenerateRate}/minute. `}</Text>
      </View>
      <UpgradeBuilding
        buildingLevel={buildingLevel}
        upgradeBuildingGoldCost={upgradeBuildingGoldCost}
        upgradeBuildingTimeCost={upgradeBuildingTimeCost}
      />
    </View>
  );
}

FarmDetail.propTypes = {
  foodGenerateRate: PropTypes.number,
  buildingLevel: PropTypes.number.isRequired,
  upgradeBuildingGoldCost: PropTypes.number.isRequired,
  upgradeBuildingTimeCost: PropTypes.number.isRequired,
};

FarmDetail.defaultProps = {
  foodGenerateRate: 0,
};

export default FarmDetail;
