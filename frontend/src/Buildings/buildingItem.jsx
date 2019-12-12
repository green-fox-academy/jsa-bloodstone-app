import React from 'react';
import {
  View, TouchableHighlight,
  Image, Text, Dimensions,
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
  id, type, level, onPress, getIconImage,
}) {
  return (
    <View key={id} style={buildingItemStyles.itemStyle}>
      <TouchableHighlight underlayColor="#0000" onPress={onPress}>
        <Image style={buildingItemStyles.iconStyle} source={getIconImage(type)} />
      </TouchableHighlight>
      <Text style={buildingItemStyles.textStyle}>{type}</Text>
      <Text style={buildingItemStyles.textStyle}>{`Level ${level}`}</Text>
    </View>
  );
}

BuildingItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  getIconImage: PropTypes.func,
};

BuildingItem.defaultProps = {
  onPress: null,
  getIconImage: null,
};

export default BuildingItem;
