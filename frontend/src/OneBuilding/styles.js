import { StyleSheet } from 'react-native';
import colors from '../common/colors';

export default StyleSheet.create({
  iconStyle: {
    width: 16,
    height: 16,
  },
  textStyle: {
    lineHeight: 24,
  },
  imageStyle: {
    width: 32,
    height: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    marginLeft: 12,
  },
  buttonTextStyle: {
    color: colors.whiteColor,
  },
  container: {
    paddingVertical: 12,
  },
});
