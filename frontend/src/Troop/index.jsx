import React from 'react';
import { View } from 'react-native';
import { Card } from '../components';

import TroopInformation from './TroopInformation';
import TroopLevel from './TroopLevel';

function TroopLevels() {
  return (
    <View>
      <TroopLevel level={1} troops={13} />
      <TroopLevel level={2} troops={8} />
      <TroopLevel level={3} troops={2} />
    </View>
  );
}

function Troop() {
  return (
    <Card>
      <TroopInformation />
      <TroopLevels />
    </Card>
  );
}

export default Troop;
