import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import RankRow from './RankRow';
import SearchBar from '../common/components/SearchBar';
import Colors from '../common/colors';
import { CardView } from '../common/components';

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

const styles = StyleSheet.create({
  searchBar: {
    width: '100%',
    fontSize: 24,
    borderRadius: 10,
    backgroundColor: Colors.lightenGrey,
  },
  searchBarView: {
    flexDirection: 'row',
    height: 48,
    marginBottom: 8,
  },
});

function Leaderboard() {
  function mockedSearchUser(username) {
    // eslint-disable-next-line no-alert
    alert(`search user ${username}`);
  }

  return (
    <ScrollView>
      <View style={styles.searchBarView}>
        <SearchBar style={styles.searchBar} onSubmit={mockedSearchUser} placeholder="🔎Search for users" />
      </View>
      <CardView style={{ padding: 10 }}>
        {mockedUsers.map((user, idx) => (
          <RankRow
            key={user.username}
            rank={idx + 1}
            username={user.username}
            gold={user.gold}
            kingdoms={user.kingdom}
          />
        ))}
      </CardView>
    </ScrollView>
  );
}

export default Leaderboard;
