import React, { useState } from 'react';
import {
  View, StyleSheet,
} from 'react-native';

import TopRanking from './TopRanking';
import MyRanking from './MyRanking';
import MenuItem from './MenuItem';

import { CardView } from '../common/components';
import colors from '../common/colors';

const TOP_RANKING = 'Leaderboard';
const MY_RANKING = 'MyRanking';

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#ffffffcc',
  },
  menuContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  textStyle: {
    color: colors.whiteColor,
  },
});

function getChildComponent(active) {
  if (active === TOP_RANKING) {
    return <TopRanking />;
  }
  if (active === MY_RANKING) {
    return <MyRanking />;
  }
  return null;
}

function Leaderboard() {
  const [activeMenuText, setActiveMenuText] = useState(MY_RANKING);
  return (
    <CardView style={styles.container}>
      <View style={styles.menuContainer}>
        <MenuItem
          active={activeMenuText}
          title={TOP_RANKING}
          onPress={() => setActiveMenuText(TOP_RANKING)}
        />
        <MenuItem
          active={activeMenuText}
          title={MY_RANKING}
          onPress={() => setActiveMenuText(MY_RANKING)}
        />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        {getChildComponent(activeMenuText)}
      </View>
    </CardView>
  );
}

export default Leaderboard;
