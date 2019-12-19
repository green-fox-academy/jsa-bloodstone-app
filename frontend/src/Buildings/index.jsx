import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Text, ScrollView,
  StyleSheet, ActivityIndicator,
} from 'react-native';
import { CardView } from '../common/components';
import BuildingItem from './buildingItem';
import AddBuildingItem from './addBuildingItem';
import { fetchBuildings, addBuildingSuccess } from './actionCreator';
import townhallIcon from '../../assets/buildings/townhall.png';
import academyIcon from '../../assets/buildings/academy.png';
import farmIcon from '../../assets/buildings/factory.png';
import mineIcon from '../../assets/buildings/mine.png';
import addFarmIcon from '../../assets/buildings/addFarm.png';
import addMineIcon from '../../assets/buildings/addMine.png';
import addAcademyIcon from '../../assets/buildings/addAcademy.png';
import Colors from '../common/colors';
import OneBuilding from '../OneBuilding';

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
  { type: 'farm', url: addFarmIcon },
  { type: 'mine', url: addMineIcon },
  { type: 'academy', url: addAcademyIcon },
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
      case 'townhall':
        return townhallIcon;
      case 'academy':
        return academyIcon;
      case 'farm':
        return farmIcon;
      case 'mine':
        return mineIcon;
      default:
        return null;
    }
  }

  function getCapitalFormOfType(type) {
    switch (type) {
      case 'townhall':
        return 'Townhall';
      case 'academy':
        return 'Academy';
      case 'farm':
        return 'Farm';
      case 'mine':
        return 'Mine';
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
      <Text>{`Oops, ${error.message}`}</Text>
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
            type={getCapitalFormOfType(addBuildingIcon.type)}
            onPress={() => addNewBuilding(addBuildingIcon.type)}
          />
        ))}
      </CardView>
      <CardView style={{ flex: 1, flexDirection: 'row' }}>
        <ScrollView bounces contentContainerStyle={styles.scrollViewContainer}>
          {listOfBuildings.map((building) => (
            <BuildingItem
              key={building.id}
              type={getCapitalFormOfType(building.type)}
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
                onClick={onCloseAddModal}
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
