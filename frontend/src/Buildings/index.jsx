import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, ScrollView,
  StyleSheet, ActivityIndicator,
} from 'react-native';

import { fetchBuildings, addBuildingSuccess } from './actionCreator';

import townhallIcon from '../../assets/buildings/townhall.png';
import academyIcon from '../../assets/buildings/academy.png';
import farmIcon from '../../assets/buildings/factory.png';
import mineIcon from '../../assets/buildings/mine.png';
import addFarmIcon from '../../assets/buildings/addFarm.png';
import addMineIcon from '../../assets/buildings/addMine.png';
import addAcademyIcon from '../../assets/buildings/addAcademy.png';

import Colors from '../common/colors';
import { CardView } from '../common/components';

import BuildingItem from './buildingItem';
import AddBuildingItem from './addBuildingItem';
import OneBuilding from '../OneBuilding';

import ErrorHandlerPage from '../ErrorHandlerPage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  scrollViewStyle: {
    flex: 1,
    marginHorizontal: -5,
    marginBottom: -10,
  },
  scrollViewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  textStyle: {
    fontSize: 15,
    lineHeight: 20,
  },
});

const ICON_LIST = [
  { type: 'Farm', url: addFarmIcon },
  { type: 'Mine', url: addMineIcon },
  { type: 'Academy', url: addAcademyIcon },
];

function Buildings() {
  const listOfBuildings = useSelector((state) => state.buildings.listOfBuildings);
  const isLoading = useSelector((state) => state.buildings.isLoading);
  const error = useSelector((state) => state.buildings.error);
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeId, setActiveId] = useState(-1);

  const onCloseAddModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    dispatch(fetchBuildings());
  }, []);

  function getIconImage(type) {
    switch (type) {
      case 'Townhall':
        return townhallIcon;
      case 'Academy':
        return academyIcon;
      case 'Farm':
        return farmIcon;
      case 'Mine':
        return mineIcon;
      default:
        return null;
    }
  }

  function handlePress(id) {
    setModalVisible(true);
    setActiveId(id);
  }

  function addNewBuilding(type) {
    dispatch(addBuildingSuccess(type));
  }

  if (error) {
    return (
      <ErrorHandlerPage ErrorInfo={`Oops, ${error.message}`} />
    );
  }
  if (isLoading) {
    return (
      <ActivityIndicator size="large" color={Colors.tealColor} />
    );
  }
  return (
    <View style={styles.container}>
      <CardView style={{ flexDirection: 'row' }}>
        {ICON_LIST.map((addBuildingIcon) => (
          <AddBuildingItem
            key={addBuildingIcon.type}
            icon={addBuildingIcon.url}
            type={addBuildingIcon.type}
            onPress={() => addNewBuilding(addBuildingIcon.type)}
          />
        ))}
      </CardView>
      <CardView style={{ flex: 1, flexDirection: 'row' }}>
        <ScrollView bounces contentContainerStyle={styles.scrollViewContainer}>
          {listOfBuildings.map((building) => (
            <BuildingItem
              key={building.id}
              type={building.type}
              level={building.level}
              onPress={() => handlePress(building.id)}
              getIconImage={getIconImage}
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
    </View>
  );
}

export default Buildings;
