import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';

function Popup({ isVisible, onPress, children }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      presentationStyle="overFullScreen"
      onRequestClose={onPress}
    >
      {children}
    </Modal>
  );
}

Popup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isVisible: PropTypes.bool,
  onPress: PropTypes.func,
};

Popup.defaultProps = {
  isVisible: false,
  onPress: null,
};


export default Popup;
