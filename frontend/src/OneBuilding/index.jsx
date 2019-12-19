import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text, View, SafeAreaView, StyleSheet,
  ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import ModalHeader from './ModalHeader';

import { fetchOneBuilding } from './actionCreator';
import PopupItem from './popupItem';
import colors from '../common/colors';

import { fetchTroops } from '../Troops/actionCreator';

import Popup from '../common/components/Popup';

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

function OneBuilding({
  onClick, targetBuildingId, getIconImage,
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
    upgradeBuildingGoldCost: 200,
    upgradeBuildingTimeCost: 150,
  };

  if (error) {
    return (
      <Text>{`Oops, ${error.message}`}</Text>
    );
  }
  if (isLoading) {
    return (
      <Popup
        onClick={onClick}
      >
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.tealColor} />
        </View>
      </Popup>
    );
  }
  if (Object.keys(oneBuildingInfo).length === 0) {
    return null;
  }

  let buildingComponent = null;
  if (oneBuildingInfo.type === 'Townhall') {
    buildingComponent = (
      <TownhallDetail
        troops={totalNumOfTroops}
        gold={mockedGold}
        food={mockedFood}
        buildingLevel={oneBuildingInfo.level}
        upgradeBuildingGoldCost={mockedRules.upgradeBuildingGoldCost}
        upgradeBuildingTimeCost={mockedRules.upgradeBuildingTimeCost}
      />
    );
  } else if (oneBuildingInfo.type === 'Academy') {
    buildingComponent = (
      <AcademyDetail
        buildingLevel={oneBuildingInfo.level}
        createTroopGoldCost={mockedRules.createTroopGoldCost}
        createTroopTimeCost={mockedRules.createTroopTimeCost}
        upgradeBuildingGoldCost={mockedRules.upgradeBuildingGoldCost}
        upgradeBuildingTimeCost={mockedRules.upgradeBuildingTimeCost}
      />
    );
  } else if (oneBuildingInfo.type === 'Farm') {
    buildingComponent = (
      <FarmDetail
        foodGenerateRate={mockedFoodGenerateRate}
        buildingLevel={oneBuildingInfo.level}
        upgradeBuildingGoldCost={mockedRules.upgradeBuildingGoldCost}
        upgradeBuildingTimeCost={mockedRules.upgradeBuildingTimeCost}
      />
    );
  } else if (oneBuildingInfo.type === 'Mine') {
    buildingComponent = (
      <MineDetail
        goldGenerateRate={mockedGoldGenerateRate}
        buildingLevel={oneBuildingInfo.level}
        upgradeBuildingGoldCost={mockedRules.upgradeBuildingGoldCost}
        upgradeBuildingTimeCost={mockedRules.upgradeBuildingTimeCost}
      />
    );
  }

  return (
    <Popup
      onClick={onClick}
    >
      <TouchableOpacity onPressOut={onClick} style={{ flex: 1 }} activeOpacity={1}>
        <SafeAreaView style={styles.background}>
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              <ModalHeader onClick={onClick} title={oneBuildingInfo.type} />
              <View style={styles.mainBody}>
                <PopupItem
                  key={oneBuildingInfo.id}
                  type={oneBuildingInfo.type}
                  level={oneBuildingInfo.level}
                  getIconImage={getIconImage}
                />
                {buildingComponent}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </TouchableOpacity>
    </Popup>
  );
}

OneBuilding.propTypes = {
  targetBuildingId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  getIconImage: PropTypes.func,
};

OneBuilding.defaultProps = {
  getIconImage: null,
};

export default OneBuilding;
