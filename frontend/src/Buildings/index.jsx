import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image, Text } from 'react-native';
import { fetching } from './actionCreator';
import TownhallIcon from '../../assets/buildings/townhall.png';
import AcademyIcon from '../../assets/buildings/academy.png';
import FarmIcon from '../../assets/buildings/factory.png';
import MineIcon from '../../assets/buildings/mine.png';

function Buildings() {
  const buildingsComponent = useSelector((state) => state.buildings.buildingsInfo);
  const statusMessage = useSelector((state) => state.message);
  const dispatch = useDispatch();
  console.log(buildingsComponent);

  useEffect(()=>{
    dispatch(fetching());
  }, [buildingsComponent]);
  
  // let buildingsComponent = [
  //   {
  //     id: 1,
  //     type: 'townhall',
  //     level: 1,
  //     hp: 1,
  //     started_at: 12345789,
  //     finished_at: 12399999,
  //   }, {
  //     id: 2,
  //     type: 'farm',
  //     level: 1,
  //     hp: 1,
  //     started_at: 12345789,
  //     finished_at: 12399999,
  //   },
  // ];

  function getIconImage(type) {
    switch (type) {
      case 'townhall':
        return TownhallIcon;
      case 'academy':
        return AcademyIcon;
      case 'farm':
        return FarmIcon;
      case 'mine':
        return MineIcon;
      default:
        return null;
    }
  }

  return (
    <View style={{textAlign: center}}>
      {buildingsComponent.map((element) =>
        <View>
          <Image style={{height:100, width:100}} source={getIconImage(element.type)} />
          <Text>{element.type}</Text>
          <Text>Level {element.level}</Text>
        </View>
      )}
    </View>
  );
}

export default Buildings;
