import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import { CardView } from '../common/components';
import { changeDisplayedComponent } from './actionCreator';
import MenuItem from './MenuItem';
import buildingMenuIcon from '../../assets/menu/Buildings.png';
import troopsMenuIcon from '../../assets/menu/Troops.png';
import battleMenuIcon from '../../assets/menu/Battle.png';
import leaderBoardMenuIcon from '../../assets/menu/Leaderboard.png';
import Colors from '../common/colors';

const ICON_LIST = [
  { name: 'Buildings', url: buildingMenuIcon },
  { name: 'Troops', url: troopsMenuIcon },
  { name: 'Battle', url: battleMenuIcon },
  { name: 'Leaderboard', url: leaderBoardMenuIcon },
];

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    paddingVertical: 10,
    backgroundColor: Colors.whiteColor,
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
      {ICON_LIST.map((element) => (
        <MenuItem
          key={element.url}
          src={element.url}
          name={element.name}
          onPress={handlePress}
          activeComponent={activeComponent}
        />
      ))}
    </CardView>
  );
}

export default Menu;
