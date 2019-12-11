import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../Settings';
import Menu from '../Menu';
import Colors from '../common/colors';

const TabNavigator = createBottomTabNavigator({
  MyKingdom: {
    screen: Menu,
    navigationOptions: {
      tabBarIcon: () => <Ionicons name="ios-home" size={25} style={{ color: Colors.whiteColor }} />,
      tabBarLabel: 'My Kingdom',
    },
  },

  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: () => <Ionicons name="md-settings" size={25} style={{ color: Colors.whiteColor }} />,
    },
  },
}, {
  initialRouteName: 'MyKingdom',
  order: ['MyKingdom', 'Settings'],
  tabBarOptions: {
    activeBackgroundColor: '#00695c',
    tabStyle: {
      padding: 0,
    },
    labelStyle: {
      fontWeight: 'bold',
      color: Colors.whiteColor,
    },
    style: {
      backgroundColor: Colors.tealColor,
    },
  },
});

export default TabNavigator;
