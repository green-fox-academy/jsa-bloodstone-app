import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';

function Popup({ visible, onPress, children }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
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
  visible: PropTypes.bool,
  onPress: PropTypes.func,
};

Popup.defaultProps = {
  visible: false,
  onPress: null,
};


export default Popup;
