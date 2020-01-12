import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  View, Image, Text,
  StyleSheet, TouchableHighlight,
} from 'react-native';
import Colors from '../common/colors';
import troopRound from '../../assets/troop/troop.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  roundAvatar: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  cardStyle: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Colors.tealColor,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
  },
  upgradeStyle: {
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    backgroundColor: Colors.redColor,
  },
  upgradeText: {
    fontSize: 8,
    color: '#fff',
  },
});

function TroopLevel({ count, level }) {
  const [showUpgradeButton, setShowUpgradeButton] = useState(false);
  const [widthOfUpgrade] = useState(new Animated.Value(0));

  function handlePress() {
    setShowUpgradeButton(!showUpgradeButton);
    Animated.timing(
      widthOfUpgrade,
      {
        toValue: showUpgradeButton ? 0 : 50,
        duration: 200,
      },
    ).start();
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.cardStyle}
        onPress={handlePress}
        underlayColor={Colors.tealColor}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={troopRound} style={styles.roundAvatar} />
          <Text style={styles.cardText}>{`Level ${level}: ${count} Troops`}</Text>
        </View>
      </TouchableHighlight>
      <Animated.View style={{ ...styles.upgradeStyle, width: widthOfUpgrade }}>
        <TouchableHighlight underlayColor="transparent" onPress={() => null}>
          <Text numberOfLines={1} style={styles.upgradeText}>UPGRADE</Text>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
}

TroopLevel.propTypes = {
  level: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default TroopLevel;
