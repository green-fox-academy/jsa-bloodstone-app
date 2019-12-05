import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, Text,
  StyleSheet, TouchableHighlight,
} from 'react-native';
import commonStyles from '../common/styles';
import troopRound from '../../assets/troop/troop.png';

const styles = StyleSheet.create({
  roundAvatar: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
});

function TroopLevel({ troops, level }) {
  function handlePress() {
    // Todo
  }

  return (
    <TouchableHighlight underlayColor="transparent" onPress={handlePress}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={commonStyles.cardStyle}>
          <Image source={troopRound} style={styles.roundAvatar} />
          <Text style={commonStyles.cardText}>
            {troops}
            Troop level
            {level}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

TroopLevel.propTypes = {
  level: PropTypes.number.isRequired,
  troops: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TroopLevel;
