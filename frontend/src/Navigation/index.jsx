import { createBottomTabNavigator } from 'react-navigation-tabs';
import Settings from '../Settings';
import Buildings from '../Buildings';
import Colors from '../common/colors';

const TabNavigator = createBottomTabNavigator({
  'My Kingdom': Buildings,
  Settings: Settings,
}, {
  initialRouteName: 'My Kingdom',
  order: ['My Kingdom', 'Settings'],
  tabBarOptions: { 
    activeTintColor: 'red',
    inactiveTintColor: 'white',
    labelStyle: {
      fontSize: 20,
      fontWeight: "bold",
      paddingBottom: 10,
    },
    style: {
      backgroundColor: Colors.tealColor,
    },
  }
});

export default TabNavigator;
