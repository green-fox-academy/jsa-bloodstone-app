import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { getPlanetImage, PLANET_IMAGES } from './assets';

const styles = StyleSheet.create({
  imageStyle: {
    width: 64,
    height: 64,
  },
});

function PlanetItem({ type }) {
  const { src } = getPlanetImage(type);
  return (
    <View>
      <Image source={src} style={styles.imageStyle} />
    </View>
  );
}

PlanetItem.propTypes = {
  type: PropTypes.oneOf(Object.keys(PLANET_IMAGES)).isRequired,
};

export default PlanetItem;
