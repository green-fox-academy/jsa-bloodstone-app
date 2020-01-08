import React from 'react';
import {
  View, Image, StyleSheet, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../common/colors';

import cookieIcon from '../../assets/troop/cookie.png';
import goldIcon from '../../assets/gold.png';

const icons = {
  gold: {
    type: 'gold',
    resourceIcon: goldIcon,
  },
  cookie: {
    type: 'cookie',
    resourceIcon: cookieIcon,
  },
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
  },
  resourceIcon: {
    width: 14,
    height: 14,
    marginHorizontal: 4,
  },
  text: {
    fontSize: 16,
    color: Colors.textColor,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 10,
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
    rateStr = `${rate}/min`;
    textColor = Colors.orangeColor;
  } else {
    rateStr = `+${rate}/min`;
    textColor = Colors.greenColor;
  }
  return { rateStr, textColor };
};

function ResourceItem({ type, amount, rate }) {
  const { rateStr, textColor } = getRateText(rate);
  const { resourceIcon } = icons[type];
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.row}>
          <Image style={styles.resourceIcon} source={resourceIcon} />
          <Text style={styles.text}>{amount}</Text>
        </View>
        <View style={{ marginLeft: 4 }}>
          <Text style={{ ...styles.subText, color: textColor }}>{rateStr}</Text>
        </View>
      </View>
    </View>
  );
}

ResourceItem.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
  amount: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
};

export default ResourceItem;
