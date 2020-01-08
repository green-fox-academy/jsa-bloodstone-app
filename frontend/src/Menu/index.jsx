import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { CardView } from '../common/components';
import { changeDisplayedComponent } from './actionCreator';

import MenuItem from './MenuItem';
import Resources from '../Resources';

import buildingMenuIcon from '../../assets/menu/Buildings.png';
import troopsMenuIcon from '../../assets/menu/Troops.png';
import battleMenuIcon from '../../assets/menu/Battle.png';
import leaderBoardMenuIcon from '../../assets/menu/Leaderboard.png';

const ICON_LIST = [
  { name: 'Buildings', url: buildingMenuIcon },
  { name: 'Troops', url: troopsMenuIcon },
  { name: 'Battle', url: battleMenuIcon },
  { name: 'Leaderboard', url: leaderBoardMenuIcon },
];

const styles = StyleSheet.create({
  container: {
    padding: 0,
    height: 150,
  },
});

function Menu() {
  const activeComponent = useSelector((state) => state.menu.currentlyDisplayComponent);
  const dispatch = useDispatch();

  function handlePress(name) {
    dispatch(changeDisplayedComponent(name));
  }

  return (
    <CardView style={styles.container}>
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)', marginHorizontal: 10 }}>
        <Resources />
      </View>
      <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}>
        {ICON_LIST.map((element) => (
          <MenuItem
            key={element.url}
            src={element.url}
            name={element.name}
            onPress={handlePress}
            activeComponent={activeComponent}
          />
        ))}
      </View>
    </CardView>
  );
}

export default Menu;
