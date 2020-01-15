import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { createTroop } from '../Troops/actionCreator';

import attackIcon from '../../assets/troop/attack.png';
import defenceIcon from '../../assets/troop/defence.png';
import cookieIcon from '../../assets/troop/cookie.png';
import CreateTroop from './CreateTroop';
import UpgradeBuilding from './UpgradeBuilding';

import commonStyles from './styles';

function AcademyDetail({
  buildingLevel,
  createTroopGoldCost,
  createTroopTimeCost,
  upgradeBuildingGoldCost,
  upgradeBuildingTimeCost,
}) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  function createTroops() {
    dispatch(createTroop(buildingLevel, token));
  }

  return (
    <View>
      <Text style={commonStyles.textStyle}>
        You can create troops in your Academy. The higher level your Academy is,
        the stronger your troops are.
        {'\n'}
      </Text>
      <View>
        <Text style={commonStyles.textStyle}>Every level increases</Text>
        <View style={commonStyles.row}>
          <Text style={commonStyles.textStyle}>1 </Text>
          <Image resizeMode="contain" source={attackIcon} style={commonStyles.iconStyle} />
          <Text style={commonStyles.textStyle}> and 1 </Text>
          <Image resizeMode="contain" source={defenceIcon} style={commonStyles.iconStyle} />
          <Text style={commonStyles.textStyle}> of the Troops.</Text>
        </View>
      </View>
      <View style={commonStyles.row}>
        <Text style={commonStyles.textStyle}>Every Troop eats 1 </Text>
        <Image resizeMode="contain" source={cookieIcon} style={commonStyles.iconStyle} />
        <Text style={commonStyles.textStyle}> every minute.</Text>
      </View>
      <View style={commonStyles.container}>
        <CreateTroop
          buildingLevel={buildingLevel}
          createTroopGoldCost={createTroopGoldCost}
          createTroopTimeCost={createTroopTimeCost}
          createTroop={createTroops}
        />
        <UpgradeBuilding
          buildingLevel={buildingLevel}
          upgradeBuildingGoldCost={upgradeBuildingGoldCost}
          upgradeBuildingTimeCost={upgradeBuildingTimeCost}
        />
      </View>
    </View>
  );
}

AcademyDetail.propTypes = {
  buildingLevel: PropTypes.number.isRequired,
  createTroopGoldCost: PropTypes.number.isRequired,
  createTroopTimeCost: PropTypes.number.isRequired,
  upgradeBuildingGoldCost: PropTypes.number.isRequired,
  upgradeBuildingTimeCost: PropTypes.number.isRequired,
};

export default AcademyDetail;
