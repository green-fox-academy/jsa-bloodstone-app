import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import attackIcon from '../../assets/troop/attack.png';
import defenceIcon from '../../assets/troop/defence.png';
import cookieIcon from '../../assets/troop/cookie.png';
import AcademyButtons from './AcademyButtons';

import commonStyles from './styles';

function AcademyDetail({
  buildingLevel,
  createTroopGoldCost,
  createTroopTimeCost,
  upgradeAcademyGoldCost,
  upgradeAcademyTimeCost,
}) {
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
      <AcademyButtons
        buildingLevel={buildingLevel}
        createTroopGoldCost={createTroopGoldCost}
        createTroopTimeCost={createTroopTimeCost}
        upgradeAcademyGoldCost={upgradeAcademyGoldCost}
        upgradeAcademyTimeCost={upgradeAcademyTimeCost}
      />
    </View>
  );
}

AcademyDetail.propTypes = {
  buildingLevel: PropTypes.number.isRequired,
  createTroopGoldCost: PropTypes.number.isRequired,
  createTroopTimeCost: PropTypes.number.isRequired,
  upgradeAcademyGoldCost: PropTypes.number.isRequired,
  upgradeAcademyTimeCost: PropTypes.number.isRequired,
};

export default AcademyDetail;
