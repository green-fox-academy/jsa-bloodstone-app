import React from 'react';
import {
  Text, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import { SubCardView } from '../common/components';
import commonColors from '../common/colors';

function CloseButton({
  onClickClose,
}) {
  return (
    <TouchableHighlight onPress={onClickClose} style={{ padding: 3, width: 100 }}>
      <SubCardView style={{ backgroundColor: 'rgb(220,0,0)', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', color: commonColors.whiteColor }}>CLOSE</Text>
      </SubCardView>
    </TouchableHighlight>
  );
}

CloseButton.propTypes = {
  onClickClose: PropTypes.func,
};

CloseButton.defaultProps = {
  onClickClose: null,
};

export default CloseButton;
