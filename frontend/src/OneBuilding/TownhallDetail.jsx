import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import troopIcon from '../../assets/troop/troop.png';
import cookieIcon from '../../assets/troop/cookie.png';
import goldIcon from '../../assets/gold.png';

import commonStyles from './styles';

function TownhallDetail({ troops, food, gold }) {
  return (
    <View>
      <View style={commonStyles.row}>
        <Text style={commonStyles.textStyle}>{`You have ${troops} `}</Text>
        <Image resizeMode="contain" source={troopIcon} style={commonStyles.iconStyle} />
        <Text style={commonStyles.textStyle}> troops.</Text>
      </View>
      <View style={commonStyles.row}>
        <Text style={commonStyles.textStyle}>{`You have ${food} `}</Text>
        <Image resizeMode="contain" source={cookieIcon} style={commonStyles.iconStyle} />
        <Text style={commonStyles.textStyle}> food.</Text>
      </View>
      <View style={commonStyles.row}>
        <Text style={commonStyles.textStyle}>{`You have ${gold} `}</Text>
        <Image resizeMode="contain" source={goldIcon} style={commonStyles.iconStyle} />
        <Text style={commonStyles.textStyle}> gold.</Text>
      </View>
    </View>
  );
}

TownhallDetail.propTypes = {
  troops: PropTypes.number,
  food: PropTypes.number,
  gold: PropTypes.number,
};

TownhallDetail.defaultProps = {
  troops: 0,
  food: 0,
  gold: 0,
};

export default TownhallDetail;
