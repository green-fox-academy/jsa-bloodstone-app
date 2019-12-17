import React from 'react';
import {
  View, Text, TouchableHighlight, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import colors from '../common/colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.tealColor,
    flexDirection: 'row',
    borderTopStartRadius: 15,
    borderTopRightRadius: 15,
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

function ModalHeader({ onClick, title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{`${title} Detail Information`}</Text>
      <TouchableHighlight style={styles.closeButton} onPress={onClick}>
        <AntDesign name="closecircleo" size={15} color="white" />
      </TouchableHighlight>
    </View>
  );
}

ModalHeader.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

ModalHeader.defaultProps = {
  onClick: null,
  title: 'Title',
};

export default ModalHeader;
