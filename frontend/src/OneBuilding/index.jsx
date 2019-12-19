import React from 'react';
import {
  Text,
  View,
  Modal,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    padding: 15,
  },
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      x: 0,
      y: 4,
    },
    shadowRadius: 6,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  errorMessageContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 15,
    backgroundColor: '#fff6f6',
    width: width - 60,
  },
  errorMessageText: {
    color: '#9f3a38',
    fontWeight: 'bold',
  },
  headerIcon: {
    padding: 15,
    paddingVertical: 10,
  },
  popupBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    width: 285,
    height: 280,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  popupHeader: {
    backgroundColor: '#4d63be',
    flexDirection: 'row',
    borderTopStartRadius: 6,
    borderTopRightRadius: 6,
    justifyContent: 'space-between',
  },
  popupTitle: {
    padding: 15,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  popupCloseButtonWrapper: {
    padding: 15,
    borderTopRightRadius: 6,
  },
  popupBody: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  popupButton: {
    height: 40,
    width: 255,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  popupButtonGroup: {
    flexDirection: 'column',
  },
});

const Header = ({ onCancel }) => (
  <View style={styles.popupHeader}>
    <Text style={styles.popupTitle}>Detail Info</Text>
    <TouchableHighlight style={styles.popupCloseButtonWrapper} underlayColor="rgba(0,0,0,0.1)" onPress={onCancel}>
      <Ionicons name="md-close" size={13} color="white" />
    </TouchableHighlight>
  </View>
);

const PopupButtonGroup = ({
  onConfirm, onCancel, confirmButtonText,
}) => (
  <View style={styles.popupButtonGroup}>
    <TouchableHighlight
      style={[
        styles.popupButton,
        { backgroundColor: '#5eceb1' },
        
      ]}
      onPress={onConfirm}
      underlayColor="#5eceb1a0"
    >
      <Text style={{ fontSize: 14, color: '#fff' }}>{confirmButtonText}</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.popupButton}
      onPress={onCancel}
      underlayColor="#eee"
    >
      <Text style={{ color: '#666' }}>Cancel</Text>
    </TouchableHighlight>
  </View>
);

export default function Popup({
  visible, onCancel, onConfirm, confirmButtonText, children,
}) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      presentationStyle="overFullScreen"
      onRequestClose={onCancel}
    >
      <SafeAreaView style={styles.popupBackground}>
        <View style={styles.popupContainer}>
          <Header onCancel={onCancel} />
          <View style={styles.popupBody}>
            {children}
            <PopupButtonGroup
              confirmButtonText={confirmButtonText}
              onConfirm={onConfirm}
              onCancel={onCancel}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
Popup.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmButtonText: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Header.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

PopupButtonGroup.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmButtonText: PropTypes.string.isRequired,
};
