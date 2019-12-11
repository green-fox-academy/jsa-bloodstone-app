import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../Settings';
import Buildings from '../Buildings';
import Colors from '../common/colors';

const TabNavigator = createBottomTabNavigator({
  'My Kingdom': {
    screen: Buildings,
    navigationOptions: {
      tabBarIcon: () => <Ionicons name="ios-home" size={25} style={{ color: 'white' }} />,
    },
  },

  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: () => <Ionicons name="md-settings" size={25} style={{ color: 'white' }} />,
    },
  },
}, {
  initialRouteName: 'My Kingdom',
  order: ['My Kingdom', 'Settings'],
  tabBarOptions: {
    activeBackgroundColor: '#00695c',
    tabStyle: {
      padding: 0,
    },
    labelStyle: {
      fontWeight: 'bold',
      color: 'white',
    },
    style: {
      backgroundColor: Colors.tealColor,
    },
  },
});

export default TabNavigator;
