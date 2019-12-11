import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { CardView } from '../common/components';
import { fetching } from './actionCreator';
import TownhallIcon from '../../assets/buildings/townhall.png';
import AcademyIcon from '../../assets/buildings/academy.png';
import FarmIcon from '../../assets/buildings/factory.png';
import MineIcon from '../../assets/buildings/mine.png';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    lineHeight: 20,
  },
  itemStyle: {
    width: Dimensions.get('screen').width / 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  iconStyle:{
    maxWidth: 150,
    maxHeight: 150,
    height: 100,
    width: 100,
  },
});

function Buildings() {
  const buildingsComponent = useSelector((state) => state.buildings.buildingsInfo);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetching());
  }, []);

  function getIconImage(type) {
    switch (type) {
      case 'Townhall':
        return TownhallIcon;
      case 'Academy':
        return AcademyIcon;
      case 'Farm':
        return FarmIcon;
      case 'Mine':
        return MineIcon;
      default:
        return null;
    }
  }

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
        {buildingsComponent.map((element) =>
          <View key={element.id} style={styles.itemStyle}>
            <Image style={styles.iconStyle} source={getIconImage(element.type)} />
            <Text style={styles.textStyle}>{element.type}</Text>
            <Text style={styles.textStyle}>Level {element.level}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default Buildings;
