import React from 'react';
import { ScrollView, Text } from 'react-native';
import RankRow from './RankRow';
import SearchBar from '../common/components/SearchBar';

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

  function mockedSearchUser(username) {
    alert('search user ' + username);
  }

  return (
    <ScrollView>
      <SearchBar onSubmit={mockedSearchUser} />
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
