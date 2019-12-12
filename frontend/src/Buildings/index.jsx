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
  const buildingsComponent = useSelector((state) => state.buildings.buildingsInfo);
  const isLoading = useSelector((state) => state.buildings.isLoading);
  const errorMessage = useSelector((state) => state.buildings.error);
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

  if (errorMessage !== '') {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
      </View>
    );
  }
  return (
    <View>
      {isLoading
        ? <ActivityIndicator size="large" color="#10978b" />
        : (
          <ScrollView contentContainerStyle={styles.scrollviewStyle}>
            {buildingsComponent.map((element) => (
              <BuildingItem
                key={element.id}
                type={element.type}
                level={element.level}
                onPress={handlePress}
                getIconImage={getIconImage}
              />
            ))}
          </ScrollView>
        )}
    </View>
  );
}

export default Buildings;
