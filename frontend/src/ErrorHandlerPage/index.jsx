import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Image,
  SafeAreaView, TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import Gradient from 'react-native-css-gradient';
import Popup from '../common/components/Popup';
import ModalHeader from '../common/components/ModalHeader';
import CloseButton from './CloseButton';

import error from '../../assets/error.gif';
import commonColors from '../common/colors';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
    backgroundColor: 'rgb(202,202,202)',
    borderWidth: 2,
    borderColor: 'yellow',
    borderRadius: 6,
  },
  mainBody: {
    padding: 20,
    alignItems: 'center',
  },
  modalHeader: {
    backgroundColor: '#FF3333',
    borderTopStartRadius: 0,
    borderTopRightRadius: 0,
  },
  imgStyle: {
    height: 175,
    width: 175,
    borderRadius: 6,
  },
  textStyle: {
    margin: 10,
    fontSize: 20,
    color: commonColors.whiteColor,
    fontWeight: 'bold',
  },
});


function ErrorHandlerPage({ ErrorInfo }) {
  const [isVisible, setVisible] = useState(true);
  const gradient = 'linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)';
  return (
    <Popup onClick={() => setVisible(false)} isVisible={isVisible}>
      <TouchableOpacity onPressOut={() => setVisible(false)} style={{ flex: 1 }} activeOpacity={1}>
        <SafeAreaView style={styles.background}>
          <TouchableWithoutFeedback>
            <View>
              <Gradient gradient={gradient} style={styles.container}>
                <ModalHeader
                  onClick={() => setVisible(false)}
                  title="System Error"
                  style={styles.modalHeader}
                />
                <View style={styles.mainBody}>
                  <Image style={styles.imgStyle} source={error} />
                  <Text style={styles.textStyle}>{ErrorInfo}</Text>
                  <CloseButton onClickClose={() => setVisible(false)} />
                </View>
              </Gradient>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </TouchableOpacity>
    </Popup>
  );
}

ErrorHandlerPage.propTypes = {
  // onClickClose: PropTypes.func.isRequired,
  ErrorInfo: PropTypes.string,
  // isVisible: PropTypes.bool.isRequired,
};

ErrorHandlerPage.defaultProps = {
  ErrorInfo: 'Oops, There are some errors!',
};

export default ErrorHandlerPage;
