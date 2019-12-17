import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  Image,
  View,
  Modal,
  SafeAreaView,
  TouchableHighlight,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign, Entypo } from '@expo/vector-icons';

import SubCardView from '../common/components/SubCardView';
import { fetchOneBuilding } from './actionCreator';
import BuildingItem from '../Buildings/buildingItem';
import colors from '../common/colors';
import attackIcon from '../../assets/troop/attack.png';
import defenceIcon from '../../assets/troop/defence.png';
import cookieIcon from '../../assets/troop/cookie.png';
import goldIcon from '../../assets/gold.png';
import troopIcon from '../../assets/troop/troop.png';

const oneBuildingStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
    height: 450,
    backgroundColor: 'rgb(202,202,202)',
    borderRadius: 15,
  },
  header: {
    backgroundColor: colors.tealColor,
    flexDirection: 'row',
    borderTopStartRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'space-between',
  },
  title: {
    padding: 15,
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  closeButton: {
    padding: 15,
    borderTopRightRadius: 6,
  },
  mainBody: {
    padding: 15,
    paddingTop: 0,
    flex: 1,
    justifyContent: 'space-between',
  },
  upgradeButtonGroup: {
    flexDirection: 'column',
  },
  detailInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
  textStyle: {
    fontSize: 14,
    color: '#fff',
  },
});


const Header = ({ onClick, title }) => (
  <View style={oneBuildingStyles.header}>
    <Text style={oneBuildingStyles.title}>
      {title}
      {' '}
      Detail Information
    </Text>
    <TouchableHighlight
      style={oneBuildingStyles.closeButton}
      onPress={onClick}
    >
      <AntDesign name="closecircleo" size={15} color="white" />
    </TouchableHighlight>
  </View>
);

const AcademyButtons = ({ createTroops, upgrade }) => (
  <View style={oneBuildingStyles.upgradeButtonGroup}>
    <TouchableHighlight
      onPress={createTroops}
    >
      <SubCardView style={{ height: 55, justifyContent: 'space-between' }}>
        <Image resizeMode="contain" source={troopIcon} style={{ width: 28, height: 28 }} />
        <View style={{ flex: 1 }}>
          <Text style={oneBuildingStyles.textStyle}> create troop level 1</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={oneBuildingStyles.textStyle}>  10 </Text>
            <Image resizeMode="contain" source={goldIcon} style={oneBuildingStyles.iconStyle} />
            <Text style={oneBuildingStyles.textStyle}> 1:00</Text>
          </View>
        </View>
      </SubCardView>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={upgrade}
    >
      <SubCardView style={{ height: 55, justifyContent: 'space-between' }}>
        <View>
          <Entypo name="arrow-with-circle-up" size={28} color="white" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={oneBuildingStyles.textStyle}> Upgrade to Level 2</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={oneBuildingStyles.textStyle}>  200 </Text>
            <Image resizeMode="contain" source={goldIcon} style={oneBuildingStyles.iconStyle} />
            <Text style={oneBuildingStyles.textStyle}> 2:30</Text>
          </View>
        </View>

      </SubCardView>
    </TouchableHighlight>
  </View>
);


function OneBuilding({
  visible, onClick, activeId, getIconImage,
}) {
  const oneBuildingInfo = useSelector((state) => state.oneBuilding.oneBuildingInfo);
  const isLoading = useSelector((state) => state.oneBuilding.isLoading);
  const error = useSelector((state) => state.oneBuilding.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeId !== -1) {
      dispatch(fetchOneBuilding(activeId));
    }
  }, [activeId]);

  function getDetailInfo(type, troops, gold, food, goldGenerateRate, foodGenerateRate) {
    switch (type) {
      case 'Townhall':
        return (
          <View style={{ flex: 1, marginTop: 15 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>
                You have
                {' '}
                {troops}
                {' '}
              </Text>
              <Image resizeMode="contain" source={troopIcon} style={oneBuildingStyles.iconStyle} />
              <Text> troops.</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>
                You have
                {' '}
                {food}
                {' '}
              </Text>
              <Image resizeMode="contain" source={cookieIcon} style={oneBuildingStyles.iconStyle} />
              <Text> food.</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>
                You have
                {' '}
                {gold}
                {' '}
              </Text>
              <Image resizeMode="contain" source={goldIcon} style={oneBuildingStyles.iconStyle} />
              <Text> gold.</Text>
            </View>
          </View>
        );
      case 'Academy':
        return (
          <View style={{ flex: 1 }}>
            <Text style={{ paddingBottom: 10 }}>
              You can create troops in your Academy. The higher level your Academy is,
              the stronger your troops are.
            </Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
              <Text>Every level increases 1 </Text>
              <Image resizeMode="contain" source={attackIcon} style={oneBuildingStyles.iconStyle} />
              <Text> and 1 </Text>
              <Image
                resizeMode="contain"
                source={defenceIcon}
                style={oneBuildingStyles.iconStyle}
              />
              <Text> of the Troops.</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text>Every Troop eats 1 </Text>
              <Image resizeMode="contain" source={cookieIcon} style={oneBuildingStyles.iconStyle} />
              <Text> every minute.</Text>
            </View>
            <AcademyButtons createTroops={null} upgrade={null} />
          </View>
        );
      case 'Farm':
        return (
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 25 }}>
            <Text>The food </Text>
            <Image resizeMode="contain" source={cookieIcon} style={oneBuildingStyles.iconStyle} />
            <Text>
              {' '}
              generate rate is
              {' '}
              {foodGenerateRate}
              /minute.
              {' '}
            </Text>
          </View>
        );
      case 'Mine':
        return (
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 25 }}>
            <Text>The gold </Text>
            <Image resizeMode="contain" source={goldIcon} style={oneBuildingStyles.iconStyle} />
            <Text>
              {' '}
              generate rate is
              {' '}
              {goldGenerateRate}
              /minute.
              {' '}
            </Text>
          </View>
        );
      default:
        return null;
    }
  }

  if (error) {
    return (
      <Text>{`Oops, ${error.message}`}</Text>
    );
  }
  if (isLoading) {
    return (
      <ActivityIndicator size="large" color={colors.tealColor} />
    );
  }
  if (Object.keys(oneBuildingInfo).length === 0) {
    return null;
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      presentationStyle="overFullScreen"
      onRequestClose={onClick}
    >

      <SafeAreaView style={oneBuildingStyles.background}>
        <View style={oneBuildingStyles.container}>
          <Header onClick={onClick} title={oneBuildingInfo.type} />
          <View style={oneBuildingStyles.mainBody}>
            <BuildingItem
              key={oneBuildingInfo.id}
              type={oneBuildingInfo.type}
              level={oneBuildingInfo.level}
              onPress={null}
              getIconImage={getIconImage}
            />
            {getDetailInfo(oneBuildingInfo.type, 233, 233, 233, 233, 233)}

          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}


OneBuilding.propTypes = {
  activeId: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  getIconImage: PropTypes.func,
};

OneBuilding.defaultProps = {
  getIconImage: null,
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

AcademyButtons.propTypes = {
  createTroops: PropTypes.func,
  upgrade: PropTypes.func,
};

AcademyButtons.defaultProps = {
  createTroops: null,
  upgrade: null,
};

export default OneBuilding;
