import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Image, View, StyleSheet,
  TouchableHighlight, Dimensions,
} from 'react-native';
import Colors from '../colors';

const vw = Math.round(Dimensions.get('window').width / 600);
const FONT_SIZE = 12 * vw;

const styles = StyleSheet.create({
  menuItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 12,
  },
  menuText: {
    marginTop: 5,
    fontSize: FONT_SIZE,
    fontWeight: 'bold',
    color: '#55565a',
  },
});

function TouchableImage({
  src, name, onPress, activeComponent,
}) {
  return (
    <TouchableHighlight
      underlayColor={Colors.lightenTeal}
      onPress={() => onPress(name)}
      style={{
        flex: 1,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: activeComponent === name
          ? Colors.lightenTeal
          : 'transparent',
      }}
    >
      <View style={styles.menuItemContainer}>
        <Image
          source={src}
          resizeMode="contain"
          style={{ flex: 1 }}
        />
        <Text numberOfLines={1} style={styles.menuText}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
}

TouchableImage.propTypes = {
  src: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  activeComponent: PropTypes.string,
};

TouchableImage.defaultProps = {
  onPress: null,
  activeComponent: '',
};

export default TouchableImage;
