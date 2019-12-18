import { Dimensions } from 'react-native';

const vw =  Math.round(Dimensions.get('window').width / 600);

export default {
  fontSize: 12 * vw,
}
