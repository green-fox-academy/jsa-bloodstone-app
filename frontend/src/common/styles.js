import { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: Colors.lightenGrey,
    alignItems: 'center',
  },
  textStyle: {
    color: '#55565a',
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  cardStyle: {
    marginBottom: 20,
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 13,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#10978b',
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
  },
  upgradeButton: {
    backgroundColor: 'orange',
  },
});
