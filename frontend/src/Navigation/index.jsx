import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../Settings';
import colors from '../common/colors';
import Game from '../Game';
import Login from '../Login';
import Playground from '../Playground';

const hideHeaderOptions = {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
};

const bottomNavigationOptions = {
  initialRouteName: 'MyKingdom',
  order: ['MyKingdom', 'Playground', 'Settings'],
  tabBarOptions: {
    activeBackgroundColor: 'rgba(0,0,0,.15)',
    tabStyle: {
      padding: 0,
    },
    labelStyle: {
      fontWeight: 'bold',
      color: '#333',
    },
    style: {
      backgroundColor: colors.whiteColor,
    },
  },
};

const renderIcon = (name) => (
  <Ionicons
    style={{ color: '#333' }}
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
  Playground: {
    screen: Playground,
    navigationOptions: {
      tabBarIcon: () => renderIcon('md-planet'),
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

const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
  Home: HomeStack,
}, {
  initialRouteName: 'Home',
  ...hideHeaderOptions,
});

export default AppNavigator;
