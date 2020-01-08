import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import bluePlanetImg from '../../assets/map/blue-planet.png';
import greenPlanetImg from '../../assets/map/green-planet.png';
import yellowPlanetImg from '../../assets/map/yellow-planet.png';
import redPlanetImg from '../../assets/map/red-planet.png';
import purplePlanetImg from '../../assets/map/purple-planet.png';

import { getPlanetAnimation, resetPlanetAnimation } from './animations';

const PLANET_IMAGES = {
  blue: { title: 'Junter', src: bluePlanetImg },
  green: { title: 'Greennnn', src: greenPlanetImg },
  yellow: { title: 'Orhsad', src: yellowPlanetImg },
  red: { title: 'Pinnkl', src: redPlanetImg },
  purple: { title: 'Purrrrl', src: purplePlanetImg },
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    opacity: 0.85,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function PlanetItem({
  initialSize, type, selected, onSelectChange, onSubmit,
}) {
  const planetImage = PLANET_IMAGES[type];
  const [planetSize] = useState(new Animated.Value(initialSize));
  const [rotateZ] = useState(new Animated.Value(0));

  function handlePress() {
    console.log(`PlanetItem: ${onSelectChange}`);
    if (type !== selected) {
      getPlanetAnimation(initialSize, planetSize, rotateZ).start();
      onSelectChange(type);
    } else {
      onSelectChange(null);
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
    marginRight: 24,
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Animated.View style={itemStyle}>
          <Image source={planetImage.src} resizeMode="contain" style={styles.imageStyle} />
        </Animated.View>
        <View style={styles.textContainer}>
          <Animated.Text numberOfLines={1} style={textStyle}>{planetImage.title}</Animated.Text>
          {type === selected
            ? (
              <TouchableWithoutFeedback onPress={onSubmit}>
                <Ionicons
                  name="ios-arrow-round-forward"
                  color="#fff"
                  size={36}
                />
              </TouchableWithoutFeedback>
            )
            : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

PlanetItem.propTypes = {
  initialSize: PropTypes.number,
  type: PropTypes.oneOf(Object.keys(PLANET_IMAGES)).isRequired,
  selected: PropTypes.string,
  onSelectChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

PlanetItem.defaultProps = {
  initialSize: 100,
  selected: null,
  onSelectChange: null,
  onSubmit: null,
};

export default PlanetItem;
