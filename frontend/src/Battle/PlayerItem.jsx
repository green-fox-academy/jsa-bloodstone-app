import React from 'react';
import {
  View, Image, StyleSheet, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import userAvatar from '../../assets/user-avatar.png';
import IconText from './IconText';

import attackIcon from '../../assets/troop/attack.png';
import defenceIcon from '../../assets/troop/defence.png';
import Colors from '../common/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#ffffffdd',
    marginBottom: 5,
  },
  imageStyle: {
    width: 64,
    height: 64,
  },
  levelStyle: {
    backgroundColor: Colors.blueColor,
    marginTop: -12,
    marginRight: 0,
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 14,
    height: 14,
    marginRight: 3,
  },
  mainStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attackIconStyle: {
    padding: 12,
    backgroundColor: '#ffffff66',
    borderRadius: 32,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.12)',
  },
});

function PlayerItem({
  id, name, hp, attack, defence, planets, allLevels, onBattleStartWith,
}) {
  const isProtected = hp === 0;
  function handleAttack() {
    if (!isProtected) {
      onBattleStartWith(id, name);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainStyle}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
            <Image style={styles.imageStyle} source={userAvatar} />
            <IconText
              text={`Lv.${allLevels}`}
              style={styles.levelStyle}
              textStyle={{ color: Colors.whiteColor, fontWeight: 'bold' }}
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <IconText
                text={name.toUpperCase()}
                style={{ backgroundColor: Colors.tealColor }}
                textStyle={{ color: Colors.white90Color }}
              />
              <IconText
                icon={(
                  <Ionicons name="md-planet" size={17} style={{ marginRight: 3, color: Colors.whiteColor }} />
                )}
                style={{ backgroundColor: Colors.pinkColor }}
                textStyle={{ color: Colors.whiteColor }}
                text={`${planets}`}
              />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <IconText
                icon={(
                  <AntDesign name="heart" size={14} style={{ marginRight: 3, color: Colors.redColor }} />
                )}
                text={`${hp}`}
              />
              <IconText
                icon={(
                  <Image source={attackIcon} resizeMode="contain" style={styles.iconStyle} />
                )}
                text={`${attack}`}
              />
              <IconText
                icon={(
                  <Image source={defenceIcon} resizeMode="contain" style={styles.iconStyle} />
                )}
                text={`${defence}`}
              />
            </View>
          </View>
        </View>
        <TouchableHighlight
          underlayColor={Colors.lightenGrey}
          onPress={handleAttack}
          style={{ borderRadius: 32 }}
        >
          <View style={styles.attackIconStyle}>
            <MaterialCommunityIcons
              size={20}
              name="sword-cross"
              color={isProtected ? Colors.greyColor : Colors.pinkColor}
            />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

PlayerItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  hp: PropTypes.number,
  attack: PropTypes.number,
  defence: PropTypes.number,
  planets: PropTypes.number,
  allLevels: PropTypes.number,
  onBattleStartWith: PropTypes.func,
};

PlayerItem.defaultProps = {
  id: '',
  name: 'Name',
  hp: 0,
  attack: 0,
  defence: 0,
  planets: 0,
  allLevels: 0,
  onBattleStartWith: null,
};

export default PlayerItem;
