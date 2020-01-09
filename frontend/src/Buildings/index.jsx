import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, ScrollView, SafeAreaView,
  StyleSheet, ActivityIndicator,
} from 'react-native';

import { fetchBuildings, addBuildingSuccess } from './actionCreator';

import addFarmIcon from '../../assets/buildings/addFarm.png';
import addMineIcon from '../../assets/buildings/addMine.png';

import Colors from '../common/colors';
import { CardView } from '../common/components';

import BuildingItem from './buildingItem';
import AddBuildingItem from './addBuildingItem';
import OneBuilding from '../OneBuilding';

import ErrorPopup from '../ErrorPopup';

import townhallIcon from '../../assets/buildings/townhall.png';
import academyIcon from '../../assets/buildings/academy.png';
import farmIcon from '../../assets/buildings/factory.png';
import mineIcon from '../../assets/buildings/mine.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textStyle: {
    fontSize: 15,
    lineHeight: 20,
  },
});

const ADD_ICON_LIST = [
  { type: 'Farm', url: addFarmIcon },
  { type: 'Mine', url: addMineIcon },
];

const ICON_LIST = {
  Townhall: { name: 'Townhall', icon: townhallIcon },
  Academy: { name: 'Academy', icon: academyIcon },
  Farm: { name: 'Farm', icon: farmIcon },
  Mine: { name: 'Mine', icon: mineIcon },
};

function getIconImage(type) {
  return ICON_LIST[type].icon;
}

function Buildings() {
  const dispatch = useDispatch();
  const buildings = useSelector((state) => state.buildings);
  const { listOfBuildings, isLoading, error } = buildings;

  const [activeId, setActiveId] = useState(-1);
  const [isModalVisible, setModalVisible] = useState(false);

  const onCloseAddModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    dispatch(fetchBuildings());
  }, []);

  function handlePress(id) {
    setModalVisible(true);
    setActiveId(id);
  }

  function addNewBuilding(type) {
    dispatch(addBuildingSuccess(type));
  }

  if (error) {
    return <ErrorPopup message={`Oops, ${error.message}`} />;
  }

  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.tealColor} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <CardView style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
        {ADD_ICON_LIST.map((addBuildingIcon) => (
          <AddBuildingItem
            key={addBuildingIcon.type}
            icon={addBuildingIcon.url}
            type={addBuildingIcon.type}
            onPress={() => addNewBuilding(addBuildingIcon.type)}
          />
        ))}
      </CardView>
      <CardView style={{ flex: 1, padding: 0, marginBottom: 0 }}>
        <ScrollView
          bounces
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {listOfBuildings.map((building) => (
            <BuildingItem
              key={building.id}
              type={building.type}
              level={building.level}
              onPress={() => handlePress(building.id)}
            />
          ))}
        </ScrollView>
        {
          isModalVisible
            ? (
              <OneBuilding
                targetBuildingId={activeId}
                onClickClose={onCloseAddModal}
                getIconImage={getIconImage}
              />
            )
            : null
        }
      </CardView>
    </SafeAreaView>
  );
}

export default Buildings;
