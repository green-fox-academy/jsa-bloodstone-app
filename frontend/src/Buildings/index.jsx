import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, ScrollView, SafeAreaView,
  StyleSheet, ActivityIndicator,
} from 'react-native';

import { fetchBuildings, addBuildings } from './actionCreator';

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
  addBuildingContainer: {
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.08)',
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

  const { token } = useSelector((state) => state.auth);
  console.log(`token: ${token}`);

  useEffect(() => {
    dispatch(fetchBuildings(token));
  }, [buildings.length]);

  function handlePress(id) {
    setModalVisible(true);
    setActiveId(id);
  }

  function addNewBuilding(type, token) {
    dispatch(addBuildings(type, token));
  }

  if (error) {
    return <ErrorPopup message={`Oops, ${error.message}`} />;
  }

  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.tealColor} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <CardView style={{ flex: 1, padding: 0, marginBottom: 0, paddingBottom: 52 }}>
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
        <View style={styles.addBuildingContainer}>
          {ADD_ICON_LIST.map((addBuildingIcon) => (
            <AddBuildingItem
              key={addBuildingIcon.type}
              icon={addBuildingIcon.url}
              type={addBuildingIcon.type}
              onPress={() => addNewBuilding(addBuildingIcon.type, token)}
            />
          ))}
        </View>
      </CardView>
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
    </SafeAreaView>
  );
}

export default Buildings;
