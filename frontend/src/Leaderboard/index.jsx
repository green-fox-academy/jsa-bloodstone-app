import React from 'react';
import { ScrollView } from 'react-native';
import RowTopTen from './RowTopTen';

function Leaderboard() {
  return (
    <ScrollView>
      <RowTopTen rank={1} username="fdas" gold={20} crown={10} />
      <RowTopTen rank={2} username="fdas" gold={20} crown={10} />
      <RowTopTen rank={3} username="fdas" gold={20} crown={10} />
    </ScrollView>
  );
}

export default Leaderboard;
