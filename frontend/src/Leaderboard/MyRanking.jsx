import React from 'react';
import {
  View, StyleSheet,
  ScrollView,
} from 'react-native';
import { CardView } from '../common/components';
import RankingItem from './RankingItem';
import MyRankingItem from './MyRankingItem';
import RankingAxis from './RankingAxis';
import colors from '../common/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffffcc',
    paddingRight: 3,
  },
  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftLayout: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  centerLayout: {
    padding: 36,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightLayout: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
function MyRanking() {
  return (
    <CardView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.rightLayout}>
          <View>
            <RankingItem ranking={1} direction="right" />
            <RankingItem ranking={2} direction="right" />
            <RankingItem ranking={3} direction="right" />
          </View>
          <RankingAxis amount={3} circleColor={colors.tealColor} />
        </View>
        <View style={styles.centerLayout}>
          <MyRankingItem ranking={4} gold={200} kingdom={200} />
        </View>
        <View style={styles.leftLayout}>
          <RankingAxis amount={3} circleColor="gray" />
          <View>
            <RankingItem ranking={5} disabled />
            <RankingItem ranking={6} disabled />
            <RankingItem ranking={7} disabled />
          </View>
        </View>
      </ScrollView>
    </CardView>
  );
}

export default MyRanking;
