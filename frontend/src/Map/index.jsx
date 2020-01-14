import React, { useState } from 'react';
import {
  View, StyleSheet, ImageBackground,
} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useSelector } from 'react-redux';
import { SERVER_URL } from 'react-native-dotenv';
import { Toast } from 'native-base';

import PlanetSwitch from './PlanetSwitch';
import background from '../../assets/map/space.jpg';
import styles from '../common/styles';

function RegistrationMap() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const token = useSelector((state) => state.auth.token);

  function handleSubmit() {
    fetch(`http://${SERVER_URL}/kingdom/register/map`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ selectedPlanet: selected }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 201) {
          return Toast.show({
            type: 'success',
            duration: 5000,
            text: `You selected ${selected} planet.`,
            buttonText: 'Okay',
          });
        }
        if (response.status === 400) {
          return Toast.show({
            type: 'warning',
            duration: 5000,
            text: `Oops, ${response.message}`,
            buttonText: 'Okay',
          });
        }
        throw new Error('Unexpected status code.');
      })
      .then(() => navigation.navigate('Home'))
      .catch((error) => {
        Toast.show({
          type: 'failure',
          duration: 5000,
          text: `Oops, ${error.message}`,
          buttonText: 'Okay',
        });
      });
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
