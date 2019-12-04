import React from 'react'
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import commonStyles from '../common/styles';
import troopRound from '../../assets/troop/troop.png';

const styles = StyleSheet.create({
  roundAvatar: {
    width: 60,
    height: 60,
    marginRight: 12
  }
});

function TroopLevel(props) {

  function handlePress() {
    // Todo
  }

  return (
    <TouchableHighlight underlayColor="transparent" onPress={handlePress}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={commonStyles.cardStyle}>
          <Image source={troopRound} style={styles.roundAvatar}/>
          <Text style={commonStyles.cardText}>{props.troops} Troop level {props.level}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default TroopLevel;