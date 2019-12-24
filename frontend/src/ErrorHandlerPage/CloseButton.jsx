import React from 'react';
import {
  Text, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import { SubCardView } from '../common/components';

function CloseButton({
  onClickClose,
}) {
  return (
    <TouchableHighlight onPress={onClickClose} style={{ padding: 3, width: 100 }}>
      <SubCardView style={{ backgroundColor: '#7519D1', justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', color: 'white' }}>CLOSE</Text>
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
