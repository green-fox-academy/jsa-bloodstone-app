import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import battleAnimation from '../../assets/ship.gif';

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 24,
    padding: 100,
  },
});

function Battle() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.imageContainer}>
        <Image resizeMode="center" source={battleAnimation} />
      </View>
    </View>
  );
}

export default Battle;
