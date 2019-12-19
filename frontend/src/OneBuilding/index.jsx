import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  View,
  Modal,
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import SubCardView from '../common/components/SubCardView';

const oneBuildingStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 285,
    height: 280,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  header: {
    backgroundColor: '#4d63be',
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
  mainBody: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  upgradeButtonGroup: {
    flexDirection: 'column',
  },
});


const Header = ({ onClick }) => (
  <View style={oneBuildingStyles.header}>
    <Text style={oneBuildingStyles.title}>Detail Building Info</Text>
    <TouchableHighlight
      style={oneBuildingStyles.closeButton}

      onPress={onClick}
    >
      <Ionicons name="md-close" size={13} color="white" />
    </TouchableHighlight>
  </View>
);

const UpgradeButtons = ({ onClick }) => (
  <View style={oneBuildingStyles.upgradeButtonGroup}>
    <TouchableHighlight
      onPress={onClick}
    >
    <SubCardView>
      <Text style={{ fontSize: 14, color: '#fff' }}>Upgrade troops to Level 2</Text>
    </SubCardView>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={onClick}
    >
    <SubCardView>
      <Text style={{ fontSize: 14, color: '#fff' }}>Upgrade to Level 2</Text>
    </SubCardView>
    </TouchableHighlight>
  </View>
);


function OneBuilding({
  visible, onClick,
}) {

  
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      presentationStyle="overFullScreen"
      onRequestClose={onClick}
    >
      
      <SafeAreaView style={oneBuildingStyles.background}>
        <View style={oneBuildingStyles.container}>
          <Header onClick={onClick} />
          <View style={oneBuildingStyles.mainBody}>
            <View>
              
              <Text>testtesttest</Text>
            </View>
            <UpgradeButtons
              onClick={onClick}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

OneBuilding.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

UpgradeButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default OneBuilding;
