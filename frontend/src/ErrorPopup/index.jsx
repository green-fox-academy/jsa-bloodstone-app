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

import errorImage from '../../assets/error.gif';
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
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 6,
    overflow: 'hidden',
  },
  modalHeader: {
    backgroundColor: 'rgba(255,0,0,0.9)',
    borderTopStartRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 2,
    borderColor: 'grey',
  },
  mainBody: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: 'grey',
  },
  imgStyle: {
    height: 175,
    width: 175,
  },
  imgContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  textStyle: {
    margin: 10,
    fontSize: 20,
    color: commonColors.whiteColor,
    fontWeight: 'bold',
  },
});

const gradient = `linear-gradient(-195deg, red 0%, orange 20%, 
  yellow 34%, green 51%, blue 68%, indigo 84%, purple 100%)`;

function ErrorPopup({ title, message }) {
  const [isVisible, setVisible] = useState(true);
  return (
    <Popup onClick={() => setVisible(false)} isVisible={isVisible}>
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPressOut={() => setVisible(false)}>
        <SafeAreaView style={styles.background}>
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              <ModalHeader
                onClick={() => setVisible(false)}
                title={title}
                style={styles.modalHeader}
              />
              <Gradient gradient={gradient} style={styles.mainBody}>
                <View style={styles.imgContainer}>
                  <Image style={styles.imgStyle} source={errorImage} />
                </View>
                <Text style={styles.textStyle}>{message}</Text>
                <CloseButton onClickClose={() => setVisible(false)} />
              </Gradient>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </TouchableOpacity>
    </Popup>
  );
}

ErrorPopup.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

ErrorPopup.defaultProps = {
  title: 'System Error',
  message: 'Oops, There are some errors!',
};

export default ErrorPopup;
