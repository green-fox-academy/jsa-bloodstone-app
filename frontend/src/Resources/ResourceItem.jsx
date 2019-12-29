import React from 'react';
import {
  View, Image, StyleSheet, Text,
  TouchableNativeFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../common/colors';

import factoryIcon from '../../assets/buildings/factory.png';
import mineIcon from '../../assets/buildings/mine.png';
import cookieIcon from '../../assets/troop/cookie.png';
import goldIcon from '../../assets/gold.png';

const icons = {
  gold: {
    type: 'gold',
    resourceIcon: goldIcon,
    buildingIcon: mineIcon,
  },
  cookie: {
    type: 'cookie',
    resourceIcon: cookieIcon,
    buildingIcon: factoryIcon,
  },
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buildingIcon: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  resourceIcon: {
    width: 14,
    height: 14,
    marginHorizontal: 4,
  },
  text: {
    fontSize: 18,
    color: Colors.textColor,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: Colors.greenColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const getRateText = (rate) => {
  let rateStr;
  let textColor;
  if (rate < 0) {
    rateStr = `${rate}/minute`;
    textColor = Colors.orangeColor;
  } else {
    rateStr = `+${rate}/minute`;
    textColor = Colors.greenColor;
  }
  return { rateStr, textColor };
};

function ResourceItem({ type, amount, rate }) {
  const { rateStr, textColor } = getRateText(rate);
  const { buildingIcon, resourceIcon } = icons[type];
  return (
    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={styles.container}>
        <Image style={styles.buildingIcon} source={buildingIcon} />
        <View>
          <View style={styles.row}>
            <Text style={styles.text}>{amount}</Text>
            <Image style={styles.resourceIcon} source={resourceIcon} />
          </View>
          <View>
            <Text style={{ ...styles.subText, color: textColor }}>{rateStr}</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

ResourceItem.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
  amount: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
};

export default ResourceItem;
