import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, SafeAreaView, StyleSheet,
  ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import { fetchOneBuilding } from './actionCreator';
import { fetchTroops } from '../Troops/actionCreator';
import { fetchResources } from '../Resources/actionCreator';

import ModalHeader from '../common/components/ModalHeader';
import PopupItem from './popupItem';
import Popup from '../common/components/Popup';
import TownhallDetail from './TownhallDetail';
import AcademyDetail from './AcademyDetail';
import FarmDetail from './FarmDetail';
import MineDetail from './MineDetail';
import ErrorPopup from '../ErrorPopup';

import Colors from '../common/colors';
import getIconImage from '../Buildings/assets';

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
  onClickClose, targetBuildingId, isVisible,
}) {
  if (!isVisible) {
    return null;
  }
  const { oneBuildingInfo, isLoading, error } = useSelector((state) => state.oneBuilding);
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

  const {
    foodAmount, foodGeneration,
    goldAmount, goldGeneration,
  } = useSelector((state) => state.resources);

  useEffect(() => {
    dispatch(fetchResources());
    const updateResourcesInterval = setInterval(() => dispatch(fetchResources()), 60000);
    return () => clearInterval(updateResourcesInterval);
  }, []);

  if (error) {
    return <ErrorPopup message={`Oops, ${error.message}`} />;
  }

  if (isLoading || oneBuildingInfo === null) {
    return (
      <Popup onClick={onClickClose}>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.tealColor} />
        </View>
      </Popup>
    );
  }

  const {
    building: buildingDetailInfo,
    buildingRules, troopsRules,
  } = oneBuildingInfo;

  if (Object.keys(buildingDetailInfo).length === 0) {
    return null;
  }

  function getBuildingUpgradingTime(level) {
    const time = buildingRules[`upgradingTimeInSecondsLevel${level}`];
    if (!time) {
      throw new Error(`Can not find upgrading time rules about level ${level}`);
    }
    return time;
  }

  function getBuildingUpgradingCost(level) {
    const cost = buildingRules[`upgradingCostLevel${level}`];
    if (!cost) {
      throw new Error(`Can not find upgrading cost rules about level ${level}`);
    }
    return cost;
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
    <Popup onPress={onClickClose} visible={isVisible}>
      <TouchableOpacity onPressOut={onClickClose} style={{ flex: 1 }} activeOpacity={1}>
        <SafeAreaView style={styles.background}>
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              <ModalHeader
                onClick={onClickClose}
                title={`${buildingDetailInfo.type} Detail Information`}
              />
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
  isVisible: PropTypes.bool,
};

OneBuilding.defaultProps = {
  isVisible: false,
};

export default OneBuilding;
