import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, Text,
  StyleSheet,
} from 'react-native';
import factoryIcon from '../../assets/buildings/factory.png';
import mineIcon from '../../assets/buildings/mine.png';
import cookieIcon from '../../assets/troop/cookie.png';
import goldIcon from '../../assets/gold.png';
import Colors from '../common/colors';
import { CardView } from '../common/components';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: Colors.textColor,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    color: Colors.greenColor,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  resourceIcon: {
    width: 14,
    height: 14,
    marginHorizontal: 4,
  },
  buildingIcon: {
    width: 32,
    height: 32,
    marginHorizontal: 4,
  },
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function SubResourceView({
  textColor, buildingIcon,
  resourceIcon, amount, changeRate,
}) {
  let changeRateStr;
  if (changeRate < 0) {
    changeRateStr = `${changeRate}/minute`;
  } else {
    changeRateStr = `+${changeRate}/minute`;
  }

  return (
    <View style={styles.rowFlex}>
      <Image style={styles.buildingIcon} source={buildingIcon} />
      <View>
        <View style={styles.rowFlex}>
          <Text style={styles.text}>{amount}</Text>
          <Image style={styles.resourceIcon} source={resourceIcon} />
        </View>
        <View>
          <Text style={{ ...styles.subText, color: textColor }}>{changeRateStr}</Text>
        </View>
      </View>
    </View>
  );
}

SubResourceView.propTypes = {
  textColor: PropTypes.string,
  resourceIcon: PropTypes.number.isRequired,
  buildingIcon: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  changeRate: PropTypes.number.isRequired,
};

SubResourceView.defaultProps = {
  textColor: Colors.greenColor,
};

function Resources() {
  return (
    <CardView style={styles.rowFlex}>
      <SubResourceView
        textColor={Colors.orangeColor}
        buildingIcon={factoryIcon}
        resourceIcon={cookieIcon}
        amount={233}
        changeRate={233}
      />
      <SubResourceView
        textColor={Colors.orangeColor}
        buildingIcon={mineIcon}
        resourceIcon={goldIcon}
        amount={233}
        changeRate={233}
      />
    </CardView>
  );
}

export default Resources;
