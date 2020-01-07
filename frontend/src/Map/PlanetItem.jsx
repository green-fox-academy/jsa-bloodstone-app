import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import bluePlanetImg from '../../assets/map/blue-planet.png';
import greenPlanetImg from '../../assets/map/green-planet.png';
import orangePlanetImg from '../../assets/map/orange-planet.png';
import pinkPlanetImg from '../../assets/map/pink-planet.png';
import purplePlanetImg from '../../assets/map/purple-planet.png';

import { getPlanetAnimation, resetPlanetAnimation } from './animations';

const PLANET_IMAGES = {
  blue: { title: 'Junter', src: bluePlanetImg },
  green: { title: 'Greennnn', src: greenPlanetImg },
  orange: { title: 'Orhsad', src: orangePlanetImg },
  pink: { title: 'Pinnkl', src: pinkPlanetImg },
  purple: { title: 'Purrrrl', src: purplePlanetImg },
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    opacity: 0.85,
  },
});

function PlanetItem({
  initialSize, type, selected, onSelect,
}) {
  const planetImage = PLANET_IMAGES[type];
  const [planetSize] = useState(new Animated.Value(initialSize));
  const [rotateZ] = useState(new Animated.Value(0));

  function handlePress() {
    if (type !== selected) {
      getPlanetAnimation(initialSize, planetSize, rotateZ).start();
      onSelect(type);
    } else {
      onSelect(null);
    }
  }

  useEffect(() => {
    if (type !== selected) {
      resetPlanetAnimation(initialSize, planetSize, rotateZ).start();
    }
  }, [selected]);

  const itemStyle = {
    width: planetSize,
    height: planetSize,
    transform: [{ rotateZ }],
  };
  const textStyle = {
    fontSize: Animated.divide(planetSize, 7),
    fontWeight: 'bold',
    color: '#fff',
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Animated.View style={itemStyle}>
          <Image source={planetImage.src} resizeMode="contain" style={styles.imageStyle} />
        </Animated.View>
        <View style={styles.textContainer}>
          <Animated.Text numberOfLines={1} style={textStyle}>{planetImage.title}</Animated.Text>
        </View>
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
