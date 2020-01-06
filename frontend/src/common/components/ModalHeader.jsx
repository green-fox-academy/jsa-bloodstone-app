import React from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import colors from '../colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.tealColor,
    flexDirection: 'row',
    borderTopStartRadius: 6,
    borderTopRightRadius: 6,
    justifyContent: 'space-between',
  },
  title: {
    padding: 15,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  closeButton: {
    padding: 15,
    borderTopRightRadius: 6,
  },
});

function ModalHeader({ style, onClick, title }) {
  return (
    <View style={[styles.header, style]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableHighlight style={styles.closeButton} onPress={onClick}>
        <AntDesign name="closecircleo" size={15} color="white" />
      </TouchableHighlight>
    </View>
  );
}

ModalHeader.propTypes = {
  style: ViewPropTypes.style,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

ModalHeader.defaultProps = {
  style: null,
  onClick: null,
  title: 'Title',
};

export default ModalHeader;
