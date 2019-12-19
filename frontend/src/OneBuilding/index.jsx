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
import { AntDesign } from '@expo/vector-icons';
import SubCardView from '../common/components/SubCardView';
import { fetchOneBuilding } from './actionCreator';
import BuildingItem from '../Buildings/buildingItem';
import colors from '../common/colors';
import attackIcon from '../../assets/troop/attack.png';

const oneBuildingStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
    height: 400,
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
    // padding: 15,
    flex: 1,
    // justifyContent: 'space-between',
  },
  upgradeButtonGroup: {
    flexDirection: 'column',
  },
  detailInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  iconStyle: {
    width:16,
    height:16,
  }
});


const Header = ({ onClick, title }) => (
  <View style={oneBuildingStyles.header}>
    <Text style={oneBuildingStyles.title}>{title} Detail Information</Text>
    <TouchableHighlight
      style={oneBuildingStyles.closeButton}

      onPress={onClick}
    >
      <AntDesign name="closecircleo" size={15} color="white" />
    </TouchableHighlight>
  </View>
);

const AcademyButtons = ({ onClick }) => (
  <View style={oneBuildingStyles.upgradeButtonGroup}>
    <TouchableHighlight
      onPress={onClick}
    >
    <SubCardView>
      <Text style={{ fontSize: 14, color: '#fff' }}>Upgrade troops to Level 2</Text>
    </SubCardView>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={onClick}
    >
    <SubCardView>
      <Text style={{ fontSize: 14, color: '#fff' }}>Upgrade to Level 2</Text>
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

  function getDetailInfo(type){
    switch (type) {
      case 'Townhall':
        return (
          <Text>town</Text>
        );
      case 'Academy':
        return (
          <View style={{flex:1}}>
            <Text>
              You can create troops in your Academy. The higher level your Academy is,
              the stronger your troops are. 
          </Text>
            <View style={{flex:1, flexDirection:'row'}}>
              <Text>Every level increases 1 </Text>
              <Image resizeMode="contain" source={attackIcon} styles={oneBuildingStyles.iconStyle} />
            </View>
            <AcademyButtons onClick={onClick}/>
          </View>
        );
      case 'Farm':
        return (
          <Text>Farm</Text>
        );
      case 'Mine':
        return (
          <Text>Mine</Text>
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
        transparent={true}
        visible={visible}
        presentationStyle="overFullScreen"
        onRequestClose={onClick}
      >
        
        <SafeAreaView style={oneBuildingStyles.background}>
          <View style={oneBuildingStyles.container}>
            <Header onClick={onClick} title={oneBuildingInfo.type}/>
            <View style={oneBuildingStyles.mainBody}>
                <BuildingItem
                  key={oneBuildingInfo.id}
                  type={oneBuildingInfo.type}
                  level={oneBuildingInfo.level}
                  onPress={null}
                  getIconImage={getIconImage}
              />
                {getDetailInfo(oneBuildingInfo.type)}
              
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

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

AcademyButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default OneBuilding;
