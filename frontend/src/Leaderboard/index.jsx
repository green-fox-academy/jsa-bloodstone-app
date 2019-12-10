import React from 'react';
import RowTopTen from './RowTopTen';

function Leaderboard() {
  return (
    <>
      <RowTopTen rank={1} username="fdas" gold={20} crown={10} />
      <RowTopTen rank={2} username="fdas" gold={20} crown={10} />
      <RowTopTen rank={3} username="fdas" gold={20} crown={10} />
    </>
  );
}

export default Leaderboard;
