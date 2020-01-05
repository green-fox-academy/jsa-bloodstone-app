import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';
import mapStyle from './mapStyle.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    ...StyleSheet.absoluteFill,
  },
});

function RegistrationMap() {
  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={mapStyle}
        loadingEnabled
        rotateEnabled={false}
        style={styles.mapStyle}
      />
    </View>
  );
}

export default RegistrationMap;
