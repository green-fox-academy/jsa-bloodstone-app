import React from 'react';
import {
  View, StyleSheet,
  ScrollView,
} from 'react-native';
import { CardView } from '../common/components';
import RankItem from './RankItem';
import MyRankItem from './MyRankItem';
import colors from '../common/colors';

const styles = StyleSheet.create({
  scrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  leftLayout: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  rightLayout: {
    padding: 0,
    margin: 0,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
    // paddingVertical: 5,
  },
  centerLayout: {
    borderWidth: 1,
    alignSelf: 'center',
    width: '100%',
    padding: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  axisContainer: {
    width: 3,
    borderRadius: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: colors.blackColor,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 4 },
    shadowRadius: 6,
    marginHorizontal: 20,
    paddingVertical: 36,
  },
  circleStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  innerCircleStyle: {
    backgroundColor: colors.tealColor,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  axisHorizontalStyle: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
    elevation: 3,
    width: 120,
    // marginHorizontal: -100,
    // marginTop: -60,
    // marginBottom: 60,
  },
  axisVerticalStyle: {
    width: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
    elevation: 3,
  },
});
function MyRanking() {
  return (
    <CardView style={{ backgroundColor: '#ffffffcc', paddingRight: 3 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.rightLayout}>
          <View style={{ padding: 0, margin: 0 }}>
            <RankItem ranking={1} direction="right" />
            <RankItem ranking={2} direction="right" />
            <RankItem ranking={3} direction="right" />
          </View>
          <View style={styles.axisContainer}>
            <View style={styles.circleStyle}><View style={styles.innerCircleStyle} /></View>
            <View style={styles.circleStyle}><View style={styles.innerCircleStyle} /></View>
            <View style={styles.circleStyle}><View style={styles.innerCircleStyle} /></View>
          </View>
        </View>
        <View style={styles.centerLayout}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.axisVerticalStyle} />
            <MyRankItem ranking={4} />
            <View style={styles.axisVerticalStyle} />
          </View>
          <View style={styles.axisHorizontalStyle} />
        </View>
        <View style={styles.leftLayout}>
          <View style={styles.axisContainer}>
            <View style={styles.circleStyle}><View style={styles.innerCircleStyle} /></View>
            <View style={styles.circleStyle}><View style={styles.innerCircleStyle} /></View>
            <View style={styles.circleStyle}><View style={styles.innerCircleStyle} /></View>
          </View>
          <View>
            <RankItem ranking={5} disabled />
            <RankItem ranking={6} disabled />
            <RankItem ranking={7} disabled />
          </View>
        </View>
      </ScrollView>
    </CardView>
  );
}

export default MyRanking;
