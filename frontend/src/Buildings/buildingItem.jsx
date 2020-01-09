import React from 'react';
import {
  View, TouchableHighlight,
  Image, Text, Dimensions,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { CardView } from '../common/components';
import townhallIcon from '../../assets/buildings/townhall.png';
import academyIcon from '../../assets/buildings/academy.png';
import farmIcon from '../../assets/buildings/factory.png';
import mineIcon from '../../assets/buildings/mine.png';
import Colors from '../common/colors';

const ICON_LIST = {
  Townhall: { name: 'Townhall', icon: townhallIcon },
  Academy: { name: 'Academy', icon: academyIcon },
  Farm: { name: 'Farm', icon: farmIcon },
  Mine: { name: 'Mine', icon: mineIcon },
};

const styles = StyleSheet.create({
  iconStyle: {
    width: 64,
    height: 64,
  },
  imageContainer: {
    backgroundColor: '#ffffff66',
    borderRadius: 10,
    padding: 15,
    paddingBottom: 0,
    margin: 5,
  },
  levelContainer: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    position: 'absolute',
    top: 9,
    right: 5,
    borderRadius: 10,
    backgroundColor: Colors.blueColor,
  },
  levelStyle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.whiteColor,
  },
  textStyle: {
    fontSize: 10,
    fontWeight: 'bold',
    // color: Colors.whiteColor,
    color: Colors.blackColor,
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    // color: Colors.whiteColor,
    color: Colors.blackColor,
  },
  textContainer: {
    // borderWidth: 1,
    // borderColor: '#fff',
    paddingVertical: 7,
    alignItems: 'center',
  },
});

function BuildingItem({
  type, level, onPress,
}) {
  const { icon } = ICON_LIST[type];
  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.iconStyle} source={icon} />
        <View style={styles.textContainer}>
          <Text style={styles.titleStyle}>{type}</Text>
        </View>
        <View style={styles.levelContainer}>
          <Text style={styles.levelStyle}>{`Lv.${level}`}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

BuildingItem.propTypes = {
  type: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

BuildingItem.defaultProps = {
  onPress: null,
};

export default BuildingItem;
