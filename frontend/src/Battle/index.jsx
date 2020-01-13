import React from 'react';
import {
  View, StyleSheet, ScrollView,
} from 'react-native';
// import { getPlanetImage, PLANET_IMAGES } from './assets';
// import Colors from '../common/colors';
import UserItem from './UserItem';
import PlanetItem from './PlanetItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    height: 64,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffffdd',
    borderRadius: 8,
  },
});

function Battle() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <PlanetItem type="blue" />
          <PlanetItem type="green" />
          <PlanetItem type="yellow" />
          <PlanetItem type="red" />
          <PlanetItem type="purple" />
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        >
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
