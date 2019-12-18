import React from 'react';
import {
  View, Image, TouchableHighlight,
  StyleSheet, Text,
} from 'react-native';
import PropTypes from 'prop-types';

const buildingItemStyles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: 60,
    height: 60,
  },
  textStyle: {
    fontSize: 12,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});

function AddBuildingItem({ icon, type, onPress }) {
  return (
    <View style={buildingItemStyles.itemStyle}>
      <TouchableHighlight underlayColor="transparent" onPress={onPress}>
        <Image style={buildingItemStyles.iconStyle} source={icon} />
      </TouchableHighlight>
      <Text style={buildingItemStyles.textStyle}>{`Add ${type}`}</Text>
    </View>
  );
}

AddBuildingItem.propTypes = {
  icon: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

AddBuildingItem.defaultProps = {
  onPress: null,
};

export default AddBuildingItem;
