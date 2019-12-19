import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';

function Popup({ isVisible, onClick, children }) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      presentationStyle="overFullScreen"
      onRequestClose={onClick}
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
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Popup;
