import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { CardView } from '../common/components';

const style = {
  height: 40,
  margin: 5,
  lineHeight: 40,
  paddingStart: 10,
};

function CardTextInput({
  value, onChangeText, placeholder, secureTextEntry,
}) {
  const [isFocus, setFocus] = useState(false);
  const extraStyle = {
    margin: 0,
    padding: 0,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.12)',
    elevation: isFocus ? 2 : 0,
  };
  return (
    <CardView style={extraStyle}>
      <TextInput
        style={style}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#aaa"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </CardView>
  );
}

CardTextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

CardTextInput.defaultProps = {
  value: '',
  placeholder: 'placeholder',
  onChangeText: null,
  secureTextEntry: false,
};

export default CardTextInput;
