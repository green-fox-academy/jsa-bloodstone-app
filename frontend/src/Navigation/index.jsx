import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../Settings';
import colors from '../common/colors';
import Game from '../Game';
import Login from '../Login';

const TabNavigator = createBottomTabNavigator({
  MyKingdom: {
    screen: Game,
    navigationOptions: {
      tabBarIcon: () => (
        <Ionicons
          name="ios-home"
          size={25}
          style={{ color: colors.whiteColor }}
        />
      ),
      tabBarLabel: 'My Kingdom',
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: () => (
        <Ionicons
          name="md-settings"
          size={25}
          style={{ color: colors.whiteColor }}
        />
      ),
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
}, {
  initialRouteName: 'Login',
  order: ['MyKingdom', 'Settings', 'Login'],
  tabBarOptions: {
    activeBackgroundColor: '#00695c',
    tabStyle: {
      padding: 0,
    },
    labelStyle: {
      fontWeight: 'bold',
      color: colors.whiteColor,
    },
    style: {
      backgroundColor: colors.tealColor,
    },
  },
});

export default TabNavigator;
