import React from 'react';
import {
  View, Image, TouchableHighlight,
  StyleSheet, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import FontStyle from '../common/fonts';

const styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    alignItems: 'center',
    padding: 2,
  },
  iconStyle: {
    width: 60,
    height: 60,
  },
  textStyle: {
    fontSize: FontStyle.fontSize,
    fontWeight: 'bold',
    lineHeight: 24,
    marginTop: 4,
    color: '#333',
    textAlignVertical: 'center',
  },
});

function AddBuildingItem({ icon, type, onPress }) {
  return (
    <View style={styles.itemStyle}>
      <TouchableHighlight underlayColor="transparent" onPress={onPress}>
        <Image style={styles.iconStyle} source={icon} />
      </TouchableHighlight>
      <Text style={styles.textStyle}>{`Add ${type}`}</Text>
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
