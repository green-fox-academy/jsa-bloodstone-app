import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ImageBackground, ScrollView, Button, Alert,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
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
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const displayList = ['blue', 'green', 'orange', 'pink', 'purple'];
  function handleSubmit() {
    Alert.alert('INFO', selected);
    navigation.navigate('Home');
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
          {displayList.map(
            (item) => (
              <PlanetItem
                key={item}
                type={item}
                selected={selected}
                onSelect={(type) => setSelected(type)}
              />
            ),
          )}
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
