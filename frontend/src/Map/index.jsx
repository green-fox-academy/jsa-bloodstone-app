import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Toast } from 'native-base';

import PlanetSwitch from './PlanetSwitch';
import background from '../../assets/map/space.jpg';
import styles from '../common/styles';

function RegistrationMap() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);

  function handleSubmit() {
    Toast.show({
      type: 'success',
      duration: 5000,
      text: `You selected ${selected} planet.`,
      buttonText: 'Okay',
    });
    navigation.navigate('Auth');
  }
  return (
    <View style={StyleSheet.absoluteFill}>
      <ImageBackground
        resizeMode="cover"
        source={background}
        style={styles.background}
      >
        <PlanetSwitch
          selected={selected}
          onSelectChange={setSelected}
          onSubmit={handleSubmit}
        />
      </ImageBackground>
    </View>
  );
}

export default RegistrationMap;
