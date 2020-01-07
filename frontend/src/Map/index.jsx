import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ImageBackground, ScrollView, Button, Alert,
} from 'react-native';

import PlanetItem from './PlanetItem';
import background from '../../assets/map/space.jpg';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
  },
  scrollViewContainer: {
    padding: 20,
    flexGrow: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
});

function Map() {
  const [selected, setSelected] = useState(null);
  function handleSubmit() {
    Alert.alert('INFO', selected);
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={background}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <PlanetItem type="blue" selected={selected} onSelect={(type) => setSelected(type)} />
          <PlanetItem type="green" selected={selected} onSelect={(type) => setSelected(type)} />
          <PlanetItem type="orange" selected={selected} onSelect={(type) => setSelected(type)} />
          <PlanetItem type="pink" selected={selected} onSelect={(type) => setSelected(type)} />
          <PlanetItem type="purple" selected={selected} onSelect={(type) => setSelected(type)} />
        </ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: '#fff', paddingHorizontal: 10 }}>{`Current: ${selected}`}</Text>
          <Button title="OK" onPress={handleSubmit} />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Map;
