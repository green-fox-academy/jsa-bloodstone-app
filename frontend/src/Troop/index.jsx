import React from 'react';
import { View, StyleSheet } from 'react-native';

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
  return (
    <View style={styles.levelList}>
      <TroopLevel level={1} troops={13} />
      <TroopLevel level={2} troops={8} />
      <TroopLevel level={3} troops={2} />
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
