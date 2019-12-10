import { createBottomTabNavigator } from 'react-navigation-tabs';
import Settings from '../Settings';
import Buildings from '../Buildings';
import Colors from '../common/colors';

const TabNavigator = createBottomTabNavigator({
  'My Kingdom': Buildings,
  Settings,
}, {
  initialRouteName: 'My Kingdom',
  order: ['My Kingdom', 'Settings'],
  tabBarOptions: {
    activeTintColor: '#ffd700',
    inactiveTintColor: 'white',
    labelStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingBottom: 10,
    },
    style: {
      backgroundColor: Colors.tealColor,
    },
  },
});

export default TabNavigator;
