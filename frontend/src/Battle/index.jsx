import React, { useState } from 'react';
import {
  View, StyleSheet, ScrollView, Text, Alert, Button,
} from 'react-native';
// import { SERVER_URL } from 'react-native-dotenv';
import PlanetItem from './PlanetItem';
import PlayerItem from './PlayerItem';
import { CardView } from '../common/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: -10,
  },
  planetsContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyle: {
    height: 64,
  },
  scrollView: {
    flex: 1,
  },
});

const PLANETS = ['blue', 'green', 'yellow', 'red', 'purple'];

const mockedUsers = [
  {
    _id: '5e12d061f22b9d30a8ac7507',
    username: 'testuser3',
    hp: 0,
    attack: 0,
    defence: 0,
    allLevels: 0,
    planetList: [
      'green',
      'blue',
      'yellow',
    ],
  },
  {
    _id: '5e18181bc5cbf11a8870837e',
    username: 'clay',
    hp: 64,
    attack: 177,
    defence: 177,
    allLevels: 276,
    planetList: [
      'yellow',
    ],
  },
  {
    _id: '5e1b1689f09b912f0461ed61',
    username: 'wind',
    hp: 0,
    attack: 0,
    defence: 0,
    allLevels: 0,
    planetList: [
      'yellow',
    ],
  },
  {
    _id: '5e1b23104320f53d4c8593f3',
    username: 'jialu',
    hp: 0,
    attack: 0,
    defence: 0,
    allLevels: 0,
    planetList: [
      'yellow',
    ],
  },
];

const BATTLE_PREPARE = 'battlePrepare';
const BATTLE_REPORT = 'battleReport';

function Battle() {
  const [battleStatus, setBattleStatus] = useState(BATTLE_PREPARE);
  const [active, setActive] = useState(null);
  const [players] = useState(mockedUsers);

  if (battleStatus === BATTLE_REPORT) {
    return (
      <CardView>
        <Text>Here is mocked Battle report</Text>
        <Button onPress={() => setBattleStatus(BATTLE_PREPARE)} title="BACK" />
      </CardView>
    );
  }

  function handleBattleStart(id, name) {
    Alert.alert(
      'Battle Starting...',
      `You are going to battle with ${name.toUpperCase()}`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => setBattleStatus(BATTLE_REPORT),
        },
      ],
      { cancelable: false },
    );
  }

  // useEffect(() => {
  //   if (active) {
  //     fetch(`http://${SERVER_URL}/battle/planet/${active}`)
  //       .then((response) => {
  //         if (response.status === 200) {
  //           return response.json();
  //         }
  //         throw new Error('Unexpected status code');
  //       })
  //       .then((response) => setPlayers(response.usersInPlanet))
  //       .catch((error) => {
  //         Toast.show({
  //           type: 'warning',
  //           text: `Oops, ${error.message}`,
  //           buttonText: 'Okay',
  //         });
  //       });
  //   }
  // }, [active]);

  function renderPlayers() {
    if (!players.length) {
      return (
        <CardView>
          <Text>No players in this planet.</Text>
        </CardView>
      );
    }
    return (
      <View>
        {
          players.map(({
            _id: key, username: name, hp, attack, defence, planetList, allLevels,
          }) => (
            <PlayerItem
              key={key}
              id={key}
              name={name}
              hp={hp}
              attack={attack}
              defence={defence}
              planets={planetList.length}
              allLevels={allLevels}
              onBattleStartWith={handleBattleStart}
            />
          ))
        }
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.planetsContainer}>
            {PLANETS.map(
              (type) => (
                <PlanetItem
                  key={type}
                  type={type}
                  active={active === type}
                  onSelectChange={setActive}
                />
              ),
            )}
          </View>
          {
            active
              ? renderPlayers()
              : (
                <CardView>
                  <Text>Please select a planet.</Text>
                </CardView>
              )
          }
        </ScrollView>
      </View>
    </View>
  );
}

export default Battle;
