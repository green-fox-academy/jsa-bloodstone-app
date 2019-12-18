import React from 'react';
import {
  View, StyleSheet,
  ScrollView,
} from 'react-native';
import { CardView } from '../common/components';
import RankItem from './RankItem';
import MyRankItem from './MyRankItem';

const styles = StyleSheet.create({
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  leftLayout: {
    alignSelf: 'flex-start',
  },
  rightLayout: {
    alignSelf: 'flex-end',
  },
  centerLayout: {
    alignSelf: 'center',
    width: '100%',
    padding: 36,
  },
});
function MyRanking() {
  return (
    <CardView style={{ backgroundColor: '#ffffffcc' }}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.leftLayout}>
          <RankItem ranking={1} direction="right" />
          <RankItem ranking={2} direction="right" />
          <RankItem ranking={3} direction="right" />
        </View>
        <View style={styles.centerLayout}>
          <MyRankItem ranking={4} />
        </View>
        <View style={styles.rightLayout}>
          <RankItem ranking={5} disabled />
          <RankItem ranking={6} disabled />
          <RankItem ranking={7} disabled />
        </View>
      </ScrollView>
    </CardView>
  );
}

export default MyRanking;
