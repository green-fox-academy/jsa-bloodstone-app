import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../Settings';
import colors from '../common/colors';
import Game from '../Game';
import Login from '../Login';
import Map from '../Map';

const hideHeaderOptions = {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
};

const bottomNavigationOptions = {
  initialRouteName: 'MyKingdom',
  order: ['MyKingdom', 'Settings'],
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
};

const renderIcon = (name) => (
  <Ionicons
    style={{ color: colors.whiteColor }}
    name={name}
    size={25}
  />
);

const TabNavigator = createBottomTabNavigator({
  MyKingdom: {
    screen: Game,
    navigationOptions: {
      title: 'Kingdom',
      tabBarLabel: 'My Kingdom',
      tabBarIcon: () => renderIcon('ios-home'),
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: () => renderIcon('md-settings'),
    },
  },
}, bottomNavigationOptions);

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    path: 'login/',
  },
}, hideHeaderOptions);

const HomeStack = createStackNavigator({
  Home: {
    screen: TabNavigator,
    path: 'kingdom/',
  },
}, hideHeaderOptions);

const MapStack = createStackNavigator({
  Map: {
    screen: Map,
    path: 'map/',
  },
}, hideHeaderOptions);


const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
  Home: HomeStack,
  Map: MapStack,
}, {
  initialRouteName: 'Map',
  ...hideHeaderOptions,
});

export default AppNavigator;
