import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View, ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { CardView } from '../common/components';
import Colors from '../common/colors';

import { fetchTroops } from './actionCreator';
import TroopInformation from './TroopInformation';
import TroopLevel from './TroopLevel';
import ErrorPopup from '../ErrorPopup';

function Troops() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(fetchTroops(token));
  }, []);

  const { listOfTroops, isLoading, error } = useSelector((state) => state.troops);

  const [troop] = listOfTroops;

  if (error) {
    return <ErrorPopup message={`Oops, ${error.message}`} />;
  }

  if (isLoading || !troop) {
    return <ActivityIndicator size="large" color={Colors.tealColor} />;
  }

  const {
    attack, defence, hp: sustenance, countByLevel,
  } = troop;

  return (
    <CardView style={{ flexDirection: 'column' }}>
      <TroopInformation
        attack={attack}
        defence={defence}
        sustenance={sustenance}
      />
      <View style={{ paddingVertical: 20 }}>
        {countByLevel.map((item) => <TroopLevel level={item.level} count={item.count} />)}
      </View>
    </CardView>
  );
}

export default Troops;
