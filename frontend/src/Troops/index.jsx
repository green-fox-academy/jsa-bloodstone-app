import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View, ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Colors from '../common/colors';

import { fetchTroops } from './actionCreator';
import TroopInformation from './TroopInformation';
import TroopLevel from './TroopLevel';
import ErrorPopup from '../ErrorPopup';

const styles = StyleSheet.create({
  levelList: {
    paddingVertical: 10,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingBottom: 3,
    borderRadius: 7,
  },
});

function TroopLevels({ level1TroopNum, level2TroopNum, level3TroopNum }) {
  return (
    <View style={styles.levelList}>
      {level1TroopNum !== 0 && <TroopLevel level={1} troops={level1TroopNum} />}
      {level2TroopNum !== 0 && <TroopLevel level={2} troops={level2TroopNum} />}
      {level3TroopNum !== 0 && <TroopLevel level={3} troops={level3TroopNum} />}
    </View>
  );
}

TroopLevels.propTypes = {
  level1TroopNum: PropTypes.number.isRequired,
  level2TroopNum: PropTypes.number.isRequired,
  level3TroopNum: PropTypes.number.isRequired,
};

function Troops() {
  const listOfTroops = useSelector((state) => state.troops.listOfTroops);
  const isLoading = useSelector((state) => state.troops.isLoading);
  const error = useSelector((state) => state.troops.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTroops());
  }, []);

  if (error) {
    return (
      <ErrorPopup message={`Oops, ${error.message}`} />
    );
  }

  if (isLoading) {
    return (
      <ActivityIndicator size="large" color={Colors.tealColor} />
    );
  }

  const level1TroopNum = listOfTroops.filter((troop) => troop.level === 1).length;
  const level2TroopNum = listOfTroops.filter((troop) => troop.level === 2).length;
  const level3TroopNum = listOfTroops.filter((troop) => troop.level === 3).length;
  const attack = level1TroopNum + level2TroopNum * 2 + level3TroopNum * 3;
  const defence = level1TroopNum + level2TroopNum * 2 + level3TroopNum * 3;
  const sustenance = level1TroopNum + level2TroopNum + level3TroopNum;

  return (
    <View style={{ flexDirection: 'column' }}>
      <TroopInformation
        attack={attack}
        defence={defence}
        sustenance={sustenance}
      />
      <TroopLevels
        level1TroopNum={level1TroopNum}
        level2TroopNum={level2TroopNum}
        level3TroopNum={level3TroopNum}
      />
    </View>
  );
}

export default Troops;
