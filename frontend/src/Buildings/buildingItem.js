import React from 'react';
import {
  View, TouchableHighlight,
  Image, Text, Dimensions,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const buildingItemStyles = StyleSheet.create({
  itemStyle: {
    width: Dimensions.get('screen').width / 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderColor: 'black',
  },
  iconStyle: {
    width: 'auto',
    height: 'auto',
    maxWidth: 200,
    maxHeight: 200,
    minWidth: 70,
    minHeight: 70,
    aspectRatio: 1,
  },
  textStyle: {
    fontSize: 15,
    lineHeight: 20,
  },
});

function BuildingItem({
  type, level, onPress, getIconImage,
}) {
  return (
    <View style={buildingItemStyles.itemStyle}>
      <TouchableHighlight underlayColor="#0000" onPress={onPress}>
        <Image style={buildingItemStyles.iconStyle} source={getIconImage(type)} />
      </TouchableHighlight>
      <Text style={buildingItemStyles.textStyle}>{type}</Text>
      <Text style={buildingItemStyles.textStyle}>{`Level ${level}`}</Text>
    </View>
  );
}

BuildingItem.propTypes = {
  type: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  getIconImage: PropTypes.func,
};

BuildingItem.defaultProps = {
  onPress: null,
  getIconImage: null,
};

export default BuildingItem;
