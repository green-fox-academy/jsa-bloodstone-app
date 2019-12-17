import React from 'react';
import {
  View, Image, Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  description: {
    marginLeft: 12,
  },
  iconStyle: {
    width: 64,
    height: 64,
  },
  textStyle: {
    fontSize: 14,
    lineHeight: 20,
  },
});

function BuildingItem({
  type, level, getIconImage,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.iconStyle} resizeMode="contain" source={getIconImage(type)} />
      <View style={styles.description}>
        <Text style={styles.textStyle}>{type}</Text>
        <Text style={styles.textStyle}>{`Level ${level}`}</Text>
      </View>
    </View>
  );
}

BuildingItem.propTypes = {
  type: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  getIconImage: PropTypes.func,
};

BuildingItem.defaultProps = {
  getIconImage: null,
};

export default BuildingItem;
