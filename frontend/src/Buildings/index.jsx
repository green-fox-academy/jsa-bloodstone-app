import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Text, ScrollView,
  StyleSheet, ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { CardView } from '../common/components';
import BuildingItem from './buildingItem';
import AddBuildingItem from './addBuildingItem';
import { fetchBuildings, addBuilding } from './actionCreator';
import townhallIcon from '../../assets/buildings/townhall.png';
import academyIcon from '../../assets/buildings/academy.png';
import farmIcon from '../../assets/buildings/factory.png';
import mineIcon from '../../assets/buildings/mine.png';
import addFarmIcon from '../../assets/buildings/addFarm.png';
import addMineIcon from '../../assets/buildings/addMine.png';
import addAcademyIcon from '../../assets/buildings/addAcademy.png';
import Colors from '../common/colors';

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
  },
  textStyle: {
    fontSize: 15,
    lineHeight: 20,
  },
});

function Buildings() {
  const listOfBuildings = useSelector((state) => state.buildings.listOfBuildings);
  const isLoading = useSelector((state) => state.buildings.isLoading);
  const error = useSelector((state) => state.buildings.error);
  const dispatch = useDispatch();

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

  function handlePress() {
    // TODO for one building
  }

  function addPress(type) {
    dispatch(addBuilding(type));
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
    <SafeAreaView style={{ flex: 1 }}>
      <CardView style={{ flexDirection: 'row' }}>
        <AddBuildingItem
          icon={addFarmIcon}
          type="Farm"
          onPress={() => addPress('Farm')}
        />
        <AddBuildingItem
          icon={addMineIcon}
          type="Mine"
          onPress={() => addPress('Mine')}
        />
        <AddBuildingItem
          icon={addAcademyIcon}
          type="Academy"
          onPress={() => addPress('Academy')}
        />
      </CardView>
      <ScrollView
        bounces
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {listOfBuildings.map((building) => (
          <BuildingItem
            key={building.id}
            type={building.type}
            level={building.level}
            onPress={handlePress}
            getIconImage={getIconImage}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Buildings;
