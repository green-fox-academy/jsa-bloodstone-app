import React from 'react';
import {
  View, StyleSheet, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../common/colors';
import commonStyles from '../common/styles';

const styles = StyleSheet.create({
  container: {
    width: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
    marginRight: 36,
    paddingVertical: 36,
  },
  circleStyle: {
    ...commonStyles.shadowEffect,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  innerCircleStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});

function* range(start, end) {
  for (let i = start; i <= end; i += 1) {
    yield i;
  }
}

function RankingAxis({ amount, circleColor, style }) {
  const extraInnerCircleStyle = {
    backgroundColor: circleColor,
  };

  return (
    <View style={[styles.container, style]}>
      {[...range(1, amount)].map(
        (number) => (
          <View key={number} style={styles.circleStyle}>
            <View style={[styles.innerCircleStyle, extraInnerCircleStyle]} />
          </View>
        ),
      )}
    </View>
  );
}

RankingAxis.propTypes = {
  style: ViewPropTypes.style,
  amount: PropTypes.number.isRequired,
  circleColor: PropTypes.string,
};

RankingAxis.defaultProps = {
  style: null,
  circleColor: colors.greyColor,
};

export default RankingAxis;
