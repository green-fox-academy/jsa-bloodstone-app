import React from 'react';
import {
  View, Image, StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import userAvatar from '../../assets/user-avatar.png';
import IconText from './IconText';

import attackIcon from '../../assets/troop/attack.png';
import defenceIcon from '../../assets/troop/defence.png';
import Colors from '../common/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.12)',
  },
  imageStyle: {
    width: 64,
    height: 64,
  },
  textStyle: {
    fontSize: 16,
    // lineHeight: 32,
  },
  iconStyle: {
    width: 14,
    height: 14,
    marginRight: 3,
  },
});

function UserItem() {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={userAvatar} />
      <View style={{ paddingHorizontal: 12 }}>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <IconText
            text="Lv.12"
            style={{ backgroundColor: Colors.blueColor }}
            textStyle={{ color: Colors.whiteColor }}
          />
          <IconText text="Kyya" />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <IconText
            icon={(
              <Image
                source={attackIcon}
                resizeMode="contain"
                style={styles.iconStyle}
              />
            )}
            text="1000"
          />
          <IconText
            icon={(
              <Image
                source={defenceIcon}
                resizeMode="contain"
                style={styles.iconStyle}
              />
            )}
            text="1000"
          />
          <IconText
            icon={(
              <AntDesign
                name="heart"
                style={[styles.iconStyle, { color: Colors.redColor }]}
              />
            )}
            text="1000"
          />
        </View>
      </View>
    </View>
  );
}

export default UserItem;
