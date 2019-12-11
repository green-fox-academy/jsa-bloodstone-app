import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.lightenGrey,
  },
  textStyle: {
    color: '#55565a',
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
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 3,
  },
  subCardStyle: {
    marginBottom: 2,
    padding: 12,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: Colors.tealColor,
    flexDirection: 'row',
    shadowColor: '#fff',
  },
  screenStyle: {
    paddingTop: Constants.statusBarHeight,
  },
});
