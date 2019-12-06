import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Image, View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

export default function TouchableImage({
  src, name, onPress, isPressed,
}) {
  const windowsWidth = Dimensions.get('window').width;
  const LABEL_SIZE = Math.round(windowsWidth / 500) * 10;

  return (
    <TouchableHighlight underlayColor="transparent" onPress={() => onPress(name)} style={{ width: '25%', height: '100%' }}>
      <View style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isPressed === name ? 'rgba(148, 148, 148, .8)' : 'rgba(255, 255, 255, .8)',
      }}
      >
        <Image source={src} style={{ width: '60%', height: '62%' }} />
        <Text style={{ color: '#55565a', fontSize: LABEL_SIZE }}>{ name }</Text>
      </View>
    </TouchableHighlight>
  );
}

TouchableImage.propTypes = {
  src: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  isPressed: PropTypes.string,
};

TouchableImage.defaultProps = {
  onPress: null,
  isPressed: '',
};
