import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Animated,
  Easing,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import bluePlanetImg from '../../assets/map/blue-planet.png';
import greenPlanetImg from '../../assets/map/green-planet.png';
import orangePlanetImg from '../../assets/map/orange-planet.png';
import pinkPlanetImg from '../../assets/map/pink-planet.png';
import purplePlanetImg from '../../assets/map/purple-planet.png';

const PLANET_IMAGES = {
  blue: {
    title: 'Junter',
    src: bluePlanetImg,
  },
  green: {
    title: 'Greennnn',
    src: greenPlanetImg,
  },
  orange: {
    title: 'Orhsad',
    src: orangePlanetImg,
  },
  pink: {
    title: 'Pinnkl',
    src: pinkPlanetImg,
  },
  purple: {
    title: 'Purrrrl',
    src: purplePlanetImg,
  },
};
const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  textStyle: {
    fontSize: 18,
    color: '#999',
    fontFamily: 'Roboto',
  },
});

function PlanetItem({
  initialSize, type, selected, onSelect,
}) {
  const planetImage = PLANET_IMAGES[type];
  const [size] = useState(new Animated.Value(initialSize));

  function handlePress() {
    if (type !== selected) {
      Animated.timing(size, {
        toValue: initialSize * 2,
        duration: 1000,
        easing: Easing.elastic(1.8),
      }).start();
      onSelect(type);
    } else {
      onSelect(null);
    }
  }

  useEffect(() => {
    if (type !== selected) {
      Animated.timing(size, {
        toValue: initialSize,
        duration: 1000,
        easing: Easing.elastic(1.8),
      }).start();
    }
  }, [selected]);

  const itemStyle = {
    width: size,
    height: size,
    marginRight: 24,
  };
  const resizeMode = ['pink', 'purple'].includes(type) ? 'center' : 'cover';
  return (
    <TouchableWithoutFeedback onPress={handlePress} style={{ borderWidth: 1, borderColor: 'white' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Animated.View style={itemStyle}>
          <Image source={planetImage.src} resizeMode={resizeMode} style={styles.imageStyle} />
        </Animated.View>
        <Text numberOfLines={1} style={styles.textStyle}>{planetImage.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

PlanetItem.propTypes = {
  initialSize: PropTypes.number,
  type: PropTypes.oneOf(Object.keys(PLANET_IMAGES)).isRequired,
  selected: PropTypes.string,
  onSelect: PropTypes.func,
};

PlanetItem.defaultProps = {
  initialSize: 100,
  selected: null,
  onSelect: null,
};

export default PlanetItem;
