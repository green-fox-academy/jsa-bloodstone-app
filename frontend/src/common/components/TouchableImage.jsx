import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Image, View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const LABEL_SIZE = Math.round(WINDOW_WIDTH / 500) * 10;

function TouchableImage({
  src, name, onPress, activeComponent,
}) {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      onPress={() => onPress(name)}
      style={{ width: '25%', height: '100%' }}
    >
      <View style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: activeComponent === name ? 'rgba(148, 148, 148, .8)' : 'rgba(255, 255, 255, .8)',
      }}
      >
        <Image source={src} style={{ width: '60%', height: '60%' }} />
        <Text style={{ color: '#55565a', fontSize: LABEL_SIZE }}>{name}</Text>
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
