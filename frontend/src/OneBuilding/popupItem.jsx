import React from 'react';
import {
  View, Image, Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import commonStyles from './styles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
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

function PopupItem({
  type, level, getIconImage,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.iconStyle} resizeMode="contain" source={getIconImage(type)} />
      <View style={commonStyles.description}>
        <Text style={styles.textStyle}>{type}</Text>
        <Text style={styles.textStyle}>{`Level ${level}`}</Text>
      </View>
    </View>
  );
}

PopupItem.propTypes = {
  type: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  getIconImage: PropTypes.func,
};

PopupItem.defaultProps = {
  getIconImage: null,
};

export default PopupItem;
