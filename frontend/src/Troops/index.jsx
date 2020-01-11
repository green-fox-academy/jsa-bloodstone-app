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
import { CardView } from '../common/components';

const styles = StyleSheet.create({
  levelList: {
    paddingVertical: 10,
    marginTop: 8,
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
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTroops(token));
  }, []);

  if (error) {
    return <ErrorPopup message={`Oops, ${error.message}`} />;
  }

  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.tealColor} />;
  }

  const level1TroopNum = listOfTroops.countByLevel ? listOfTroops.countByLevel[0].count : 0;
  const level2TroopNum = listOfTroops.countByLevel ? listOfTroops.countByLevel[1].count : 0;
  const level3TroopNum = listOfTroops.countByLevel ? listOfTroops.countByLevel[2].count : 0;

  return (
    <CardView style={{ flex: 1 }}>
      <TroopInformation
        attack={listOfTroops.attack}
        defence={listOfTroops.defence}
        sustenance={listOfTroops.hp}
      />
      <TroopLevels
        level1TroopNum={level1TroopNum}
        level2TroopNum={level2TroopNum}
        level3TroopNum={level3TroopNum}
      />
    </CardView>
  );
}

export default Troops;
