import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text, View, SafeAreaView, StyleSheet,
  Modal, ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import ModalHeader from './ModalHeader';

import { fetchOneBuilding } from './actionCreator';
import BuildingItem from './BuildingItem';
import colors from '../common/colors';

import TownhallDetail from './TownhallDetail';
import AcademyDetail from './AcademyDetail';
import FarmDetail from './FarmDetail';
import MineDetail from './MineDetail';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
    backgroundColor: 'rgb(202,202,202)',
    borderRadius: 6,
  },
  mainBody: {
    // borderWidth: 1,
    // borderColor: 'red',
    padding: 15,
    paddingTop: 0,
  },
  upgradeButtonGroup: {
    flexDirection: 'column',
  },
  detailInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
  textStyle: {
    fontSize: 14,
    color: '#fff',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});

function getDetailInfo(type, troops, gold, food, goldGenerateRate, foodGenerateRate) {
  switch (type) {
    case 'Townhall':
      return <TownhallDetail troops={troops} gold={gold} food={food} />;
    case 'Academy':
      return <AcademyDetail />;
    case 'Farm':
      return <FarmDetail foodGenerateRate={foodGenerateRate} />;
    case 'Mine':
      return <MineDetail goldGenerateRate={goldGenerateRate} />;
    default:
      return null;
  }
}

function OneBuilding({
  visible, onClick, activeId, getIconImage,
}) {
  const oneBuildingInfo = useSelector((state) => state.oneBuilding.oneBuildingInfo);
  const isLoading = useSelector((state) => state.oneBuilding.isLoading);
  const error = useSelector((state) => state.oneBuilding.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeId !== -1) {
      dispatch(fetchOneBuilding(activeId));
    }
  }, [activeId]);

  if (error) {
    return (
      <Text>{`Oops, ${error.message}`}</Text>
    );
  }
  if (isLoading) {
    return <ActivityIndicator size="large" color={colors.tealColor} />;
  }
  if (Object.keys(oneBuildingInfo).length === 0) {
    return null;
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      presentationStyle="overFullScreen"
      onRequestClose={onClick}
    >
      <SafeAreaView style={styles.background}>
        <View style={styles.container}>
          <ModalHeader onClick={onClick} title={oneBuildingInfo.type} />
          <View style={styles.mainBody}>
            <BuildingItem
              key={oneBuildingInfo.id}
              type={oneBuildingInfo.type}
              level={oneBuildingInfo.level}
              onPress={null}
              getIconImage={getIconImage}
            />
            {getDetailInfo(oneBuildingInfo.type, 233, 233, 233, 233, 233)}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

OneBuilding.propTypes = {
  activeId: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  getIconImage: PropTypes.func,
};

OneBuilding.defaultProps = {
  getIconImage: null,
};

export default OneBuilding;
