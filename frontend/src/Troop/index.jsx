import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { fetchTroops } from './actionCreator';
import TroopInformation from './TroopInformation';
import TroopLevel from './TroopLevel';

const styles = StyleSheet.create({
  levelList: {
    paddingVertical: 10,
    flexDirection: 'column',
    marginTop: 10,
    backgroundColor: '#fff',
  },
});

function TroopLevels() {
  const troops = useSelector((state) => state.troop.troops);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTroops());
  }, []);

  const level1TroopNum = troops.filter((troop) => troop.level === 1).length;
  const level2TroopNum = troops.filter((troop) => troop.level === 2).length;
  const level3TroopNum = troops.filter((troop) => troop.level === 3).length;

  return (
    <View style={styles.levelList}>
      {level1TroopNum !== 0 && <TroopLevel level={1} troops={level1TroopNum} />}
      {level2TroopNum !== 0 && <TroopLevel level={2} troops={level2TroopNum} />}
      {level3TroopNum !== 0 && <TroopLevel level={3} troops={level3TroopNum} />}
    </View>
  );
}

function Troop() {
  return (
    <View style={{ flexDirection: 'column' }}>
      <TroopInformation />
      <TroopLevels />
    </View>
  );
}

export default Troop;
