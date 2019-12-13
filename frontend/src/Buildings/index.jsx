import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Text, ScrollView,
  StyleSheet, ActivityIndicator,
} from 'react-native';
import BuildingItem from './buildingItem';
import { fetchBuildings } from './actionCreator';
import townhallIcon from '../../assets/buildings/townhall.png';
import academyIcon from '../../assets/buildings/academy.png';
import farmIcon from '../../assets/buildings/factory.png';
import mineIcon from '../../assets/buildings/mine.png';
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
  scrollviewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    <View>
      <ScrollView contentContainerStyle={styles.scrollviewStyle}>
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
    </View>
  );
}

export default Buildings;
