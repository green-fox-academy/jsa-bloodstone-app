import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Image, Text, ActivityIndicator,
  ScrollView, Dimensions,
  StyleSheet, TouchableHighlight,
} from 'react-native';
import { fetching } from './actionCreator';
import TownhallIcon from '../../assets/buildings/townhall.png';
import AcademyIcon from '../../assets/buildings/academy.png';
import FarmIcon from '../../assets/buildings/factory.png';
import MineIcon from '../../assets/buildings/mine.png';

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
  itemStyle: {
    width: Dimensions.get('screen').width / 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderColor: 'black',
  },
  iconStyle: {
    width: 'auto',
    height: 'auto',
    maxWidth: 200,
    maxHeight: 200,
    minWidth: 70,
    minHeight: 70,
    aspectRatio: 1,
  },
  textStyle: {
    fontSize: 15,
    lineHeight: 20,
  },
});

function Buildings() {
  const buildingsComponent = useSelector((state) => state.buildings.buildingsInfo);
  const isLoading = useSelector((state) => state.buildings.loading);
  const errorMessage = useSelector((state) => state.buildings.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetching());
  }, []);

  function getIconImage(type) {
    switch (type) {
      case 'Townhall':
        return TownhallIcon;
      case 'Academy':
        return AcademyIcon;
      case 'Farm':
        return FarmIcon;
      case 'Mine':
        return MineIcon;
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
              <View key={element.id} style={styles.itemStyle}>
                <TouchableHighlight underlayColor="#0000" onPress={handlePress}>
                  <Image style={styles.iconStyle} source={getIconImage(element.type)} />
                </TouchableHighlight>
                <Text style={styles.textStyle}>{element.type}</Text>
                <Text style={styles.textStyle}>{`Level ${element.level}`}</Text>
              </View>
            ))}
          </ScrollView>
        )}
    </View>
  );
}

export default Buildings;
