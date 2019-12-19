import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../common/colors';
import commonStyles from '../common/styles';

const styles = StyleSheet.create({
  container: {
    width: 3,
    borderRadius: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
    marginHorizontal: 20,
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

function RankingAxis({ amount, circleColor }) {
  const extraInnerCircleStyle = {
    backgroundColor: circleColor,
  };

  return (
    <View style={styles.container}>
      {[...new Array(amount)].map(
        (element) => (
          <View style={styles.circleStyle} key={element}>
            <View style={[styles.innerCircleStyle, extraInnerCircleStyle]} />
          </View>
        ),
      )}
    </View>
  );
}

RankingAxis.propTypes = {
  amount: PropTypes.number.isRequired,
  circleColor: PropTypes.string,
};

RankingAxis.defaultProps = {
  circleColor: colors.greyColor,
};

export default RankingAxis;
