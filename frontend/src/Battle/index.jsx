import React from 'react';
import {
  View, StyleSheet, ScrollView,
} from 'react-native';
import UserItem from './UserItem';
import PlanetItem from './PlanetItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: -10,
  },
  planetsContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    height: 64,
  },
  scrollView: {
    flex: 1,
  },
});

function Battle() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.planetsContainer}>
            <PlanetItem type="blue" />
            <PlanetItem type="green" />
            <PlanetItem type="yellow" />
            <PlanetItem type="red" />
            <PlanetItem type="purple" />
          </View>
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </ScrollView>
      </View>
    </View>
  );
}

export default Battle;
