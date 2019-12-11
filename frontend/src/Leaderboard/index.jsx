import React from 'react';
import { ScrollView } from 'react-native';
import RankRow from './RankRow';

const mockedUsers = [
  {
    username: 'userA',
    gold: 10,
    kingdom: 10,
  },
  {
    username: 'userB',
    gold: 12,
    kingdom: 12,
  },
  {
    username: 'userCCCCCCCCCCCcCCC',
    gold: 12,
    kingdom: 12,
  },
];

function Leaderboard() {
  return (
    <ScrollView>
      {mockedUsers.map((user, idx) => (
        <RankRow
          key={user.username}
          rank={idx + 1}
          username={user.username}
          gold={user.gold}
          kingdoms={user.kingdom}
        />
      ))}
    </ScrollView>
  );
}

export default Leaderboard;
