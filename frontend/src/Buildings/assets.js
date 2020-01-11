import townhallIcon from '../../assets/buildings/townhall.png';
import academyIcon from '../../assets/buildings/academy.png';
import farmIcon from '../../assets/buildings/factory.png';
import mineIcon from '../../assets/buildings/mine.png';

const ICON_LIST = {
  Townhall: { type: 'Townhall', icon: townhallIcon },
  Academy: { type: 'Academy', icon: academyIcon },
  Farm: { type: 'Farm', icon: farmIcon },
  Mine: { type: 'Mine', icon: mineIcon },
};

export default function getIconImage(type) {
  return ICON_LIST[type].icon;
}
