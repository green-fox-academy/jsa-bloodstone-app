import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text, View, SafeAreaView, StyleSheet,
  Modal, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import ModalHeader from './ModalHeader';

import { fetchOneBuilding } from './actionCreator';
import PopupItem from './popupItem';
import colors from '../common/colors';

import { fetchTroops } from '../Troops/actionCreator';

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
    padding: 15,
    paddingTop: 0,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function getDetailInfo(
  type,
  troops,
  gold,
  food,
  goldGenerateRate,
  foodGenerateRate,
  buildingLevel,
  createTroopGoldCost,
  createTroopTimeCost,
  upgradeAcademyGoldCost,
  upgradeAcademyTimeCost,
) {
  switch (type) {
    case 'Townhall':
      return <TownhallDetail troops={troops} gold={gold} food={food} />;
    case 'Academy':
      return (
        <AcademyDetail
          buildingLevel={buildingLevel}
          createTroopGoldCost={createTroopGoldCost}
          createTroopTimeCost={createTroopTimeCost}
          upgradeAcademyGoldCost={upgradeAcademyGoldCost}
          upgradeAcademyTimeCost={upgradeAcademyTimeCost}
        />
      );
    case 'Farm':
      return <FarmDetail foodGenerateRate={foodGenerateRate} />;
    case 'Mine':
      return <MineDetail goldGenerateRate={goldGenerateRate} />;
    default:
      return null;
  }
}

function OneBuilding({
  isVisible, onClick, targetBuildingId, getIconImage,
}) {
  const oneBuildingInfo = useSelector((state) => state.oneBuilding.oneBuildingInfo);
  const isLoading = useSelector((state) => state.oneBuilding.isLoading);
  const error = useSelector((state) => state.oneBuilding.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (targetBuildingId !== -1) {
      dispatch(fetchOneBuilding(targetBuildingId));
    }
  }, [targetBuildingId]);

  const listOfTroops = useSelector((state) => state.troops.listOfTroops);
  useEffect(() => {
    dispatch(fetchTroops());
  }, []);
  const totalNumOfTroops = listOfTroops.length;

  const mockedGold = 60;
  const mockedFood = 60;
  const mockedGoldGenerateRate = 20;
  const mockedFoodGenerateRate = 30;

  const mockedRules = {
    createTroopGoldCost: 10,
    createTroopTimeCost: 60,
    upgradeAcademyGoldCost: 200,
    upgradeAcademyTimeCost: 150,
  };

  if (error) {
    return (
      <Text>{`Oops, ${error.message}`}</Text>
    );
  }
  if (isLoading) {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={isVisible}
        presentationStyle="overFullScreen"
        onRequestClose={onClick}
      >
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.tealColor} />
        </View>
      </Modal>
    );
  }
  if (Object.keys(oneBuildingInfo).length === 0) {
    return null;
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      presentationStyle="overFullScreen"
      onRequestClose={onClick}
    >
      <TouchableOpacity onPressOut={onClick} style={{ flex: 1 }} activeOpacity={1}>
        <SafeAreaView style={styles.background}>
          <View style={styles.container}>
            <ModalHeader onClick={onClick} title={oneBuildingInfo.type} />
            <View style={styles.mainBody}>
              <PopupItem
                key={oneBuildingInfo.id}
                type={oneBuildingInfo.type}
                level={oneBuildingInfo.level}
                getIconImage={getIconImage}
              />
              {getDetailInfo(
                oneBuildingInfo.type,
                totalNumOfTroops,
                mockedGold,
                mockedFood,
                mockedGoldGenerateRate,
                mockedFoodGenerateRate,
                oneBuildingInfo.level,
                mockedRules.createTroopGoldCost,
                mockedRules.createTroopTimeCost,
                mockedRules.upgradeAcademyGoldCost,
                mockedRules.upgradeAcademyTimeCost,
              )}
            </View>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    </Modal>
  );
}

OneBuilding.propTypes = {
  targetBuildingId: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  getIconImage: PropTypes.func,
};

OneBuilding.defaultProps = {
  getIconImage: null,
};

export default OneBuilding;
