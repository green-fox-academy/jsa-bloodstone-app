import bluePlanetImg from '../../assets/map/blue-planet.png';
import greenPlanetImg from '../../assets/map/green-planet.png';
import yellowPlanetImg from '../../assets/map/yellow-planet.png';
import redPlanetImg from '../../assets/map/red-planet.png';
import purplePlanetImg from '../../assets/map/purple-planet.png';

import Colors from '../common/colors';

export const PLANET_IMAGES = {
  blue: { title: 'Juniper', src: bluePlanetImg, themeColor: Colors.blueColor },
  green: { title: 'Gree', src: greenPlanetImg, themeColor: Colors.greenColor },
  yellow: { title: 'Orhsad', src: yellowPlanetImg, themeColor: Colors.orangeColor },
  red: { title: 'RedPlanet', src: redPlanetImg, themeColor: Colors.pinkColor },
  purple: { title: 'Purrrrl', src: purplePlanetImg, themeColor: Colors.purpleColor },
};

export function getPlanetImage(type) {
  return PLANET_IMAGES[type];
}
