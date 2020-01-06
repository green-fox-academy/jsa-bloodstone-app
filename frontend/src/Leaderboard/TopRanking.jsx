import React from 'react';
import {
  ScrollView, StyleSheet, View, Alert,
} from 'react-native';
import RankRow from './RankRow';
import SearchBar from './SearchBar';
import Colors from '../common/colors';

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
});

function Leaderboard() {
  function mockedSearchUser(username) {
    Alert.alert('INFO', `search user ${username}`);
  }

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <SearchBar style={styles.searchBar} onSubmit={mockedSearchUser} />
        {mockedUsers.map((user, idx) => (
          <RankRow
            key={user.username}
            rank={idx + 1}
            username={user.username}
            gold={user.gold}
            kingdoms={user.kingdom}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default Leaderboard;
