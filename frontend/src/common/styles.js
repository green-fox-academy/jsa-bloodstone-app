import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.lightenGrey,
  },
  textStyle: {
    color: Colors.textColor,
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  cardStyle: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 4 },
    shadowRadius: 6,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 3,
  },
  subCardStyle: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 4 },
    shadowRadius: 6,
    marginBottom: 2,
    padding: 12,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: Colors.tealColor,
    flexDirection: 'row',
    elevation: 1,
  },
  screenStyle: {
    paddingTop: Constants.statusBarHeight,
  },
});
