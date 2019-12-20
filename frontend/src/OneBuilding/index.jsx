import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text, View, SafeAreaView, StyleSheet,
  ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import { fetchOneBuilding } from './actionCreator';
import { fetchTroops } from '../Troops/actionCreator';
import { fetchResources } from '../Resources/actionCreator';

import ModalHeader from './ModalHeader';
import PopupItem from './popupItem';
import Popup from '../common/components/Popup';
import TownhallDetail from './TownhallDetail';
import AcademyDetail from './AcademyDetail';
import FarmDetail from './FarmDetail';
import MineDetail from './MineDetail';

import colors from '../common/colors';

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
  onClickClose, targetBuildingId, getIconImage,
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

  const foodAmount = useSelector((state) => state.resources.foodAmount);
  const foodGeneration = useSelector((state) => state.resources.foodGeneration);
  const goldAmount = useSelector((state) => state.resources.goldAmount);
  const goldGeneration = useSelector((state) => state.resources.goldGeneration);

  useEffect(() => {
    dispatch(fetchResources());
    const updateResourcesInterval = setInterval(() => dispatch(fetchResources()), 60000);
    return () => clearInterval(updateResourcesInterval);
  }, []);

  if (error) {
    return (
      <Text>{`Oops, ${error.message}`}</Text>
    );
  }
  if (isLoading || oneBuildingInfo === null) {
    return (
      <Popup onClick={onClickClose}>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.tealColor} />
        </View>
      </Popup>
    );
  }
  const buildingDetailInfo = oneBuildingInfo.building;
  const { buildingRules } = oneBuildingInfo.rules;
  const { troopsRules } = oneBuildingInfo.rules;

  function getBuildingUpgradingTime(level) {
    switch (level) {
      case 1:
        return buildingRules.upgradingTimeInSecondsLevel1;
      case 2:
        return buildingRules.upgradingTimeInSecondsLevel2;
      default:
        return null;
    }
  }

  function getBuildingUpgradingCost(level) {
    switch (level) {
      case 1:
        return buildingRules.upgradingCostLevel1;
      case 2:
        return buildingRules.upgradingCostLevel2;
      default:
        return null;
    }
  }

  if (Object.keys(buildingDetailInfo).length === 0) {
    return null;
  }

  let buildingComponent = null;
  if (buildingDetailInfo.type === 'Townhall') {
    buildingComponent = (
      <TownhallDetail
        troops={totalNumOfTroops}
        gold={goldAmount}
        food={foodAmount}
        buildingLevel={buildingDetailInfo.level}
        upgradeBuildingGoldCost={getBuildingUpgradingCost(buildingDetailInfo.level)}
        upgradeBuildingTimeCost={getBuildingUpgradingTime(buildingDetailInfo.level)}
      />
    );
  } else if (buildingDetailInfo.type === 'Academy') {
    buildingComponent = (
      <AcademyDetail
        buildingLevel={buildingDetailInfo.level}
        createTroopGoldCost={troopsRules.constructionCost}
        createTroopTimeCost={troopsRules.constructionTimeInSeconds}
        upgradeBuildingGoldCost={getBuildingUpgradingCost(buildingDetailInfo.level)}
        upgradeBuildingTimeCost={getBuildingUpgradingTime(buildingDetailInfo.level)}
      />
    );
  } else if (buildingDetailInfo.type === 'Farm') {
    buildingComponent = (
      <FarmDetail
        foodGenerateRate={foodGeneration}
        buildingLevel={buildingDetailInfo.level}
        upgradeBuildingGoldCost={getBuildingUpgradingCost(buildingDetailInfo.level)}
        upgradeBuildingTimeCost={getBuildingUpgradingTime(buildingDetailInfo.level)}
      />
    );
  } else if (buildingDetailInfo.type === 'Mine') {
    buildingComponent = (
      <MineDetail
        goldGenerateRate={goldGeneration}
        buildingLevel={buildingDetailInfo.level}
        upgradeBuildingGoldCost={getBuildingUpgradingCost(buildingDetailInfo.level)}
        upgradeBuildingTimeCost={getBuildingUpgradingTime(buildingDetailInfo.level)}
      />
    );
  }

  return (
    <Popup onClick={onClickClose}>
      <TouchableOpacity onPressOut={onClickClose} style={{ flex: 1 }} activeOpacity={1}>
        <SafeAreaView style={styles.background}>
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              <ModalHeader onClick={onClickClose} title={buildingDetailInfo.type} />
              <View style={styles.mainBody}>
                <PopupItem
                  key={buildingDetailInfo.id}
                  type={buildingDetailInfo.type}
                  level={buildingDetailInfo.level}
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
  onClickClose: PropTypes.func.isRequired,
  getIconImage: PropTypes.func,
};

OneBuilding.defaultProps = {
  getIconImage: null,
};

export default OneBuilding;
