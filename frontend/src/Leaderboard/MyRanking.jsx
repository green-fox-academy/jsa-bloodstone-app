import React from 'react';
import {
  View, StyleSheet,
  ScrollView,
} from 'react-native';
import RankingItem from './RankingItem';
import MyRankingItem from './MyRankingItem';
import RankingAxis from './RankingAxis';
import colors from '../common/colors';
import { CardView } from '../common/components';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffffcc',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  scrollViewContainer: {
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  leftLayout: {
    flexDirection: 'row',
  },
  centerLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
function MyRanking() {
  return (
    <ScrollView
      bounces
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      <View style={styles.leftLayout}>
        <RankingAxis amount={2} circleColor={colors.tealColor} />
        <View>
          <RankingItem ranking={1} gold={200} kingdom={200} themeColor={colors.tealColor} />
          <RankingItem ranking={2} gold={200} kingdom={200} themeColor={colors.tealColor} />
        </View>
      </View>
      <View style={styles.centerLayout}>
        <RankingAxis amount={1} circleColor={colors.blueColor} style={{ paddingVertical: 80 }} />
        <MyRankingItem ranking={3} gold={200} kingdom={200} />
      </View>
      <View style={styles.leftLayout}>
        <RankingAxis amount={5} circleColor={colors.greyColor} />
        <View>
          <RankingItem ranking={4} gold={200} kingdom={200} />
          <RankingItem ranking={5} gold={200} kingdom={200} />
          <RankingItem ranking={6} gold={200} kingdom={200} />
          <RankingItem ranking={7} gold={200} kingdom={200} />
          <RankingItem ranking={8} gold={200} kingdom={200} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MyRanking;
