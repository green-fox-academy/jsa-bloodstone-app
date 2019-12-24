import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';
import { CardView } from '../common/components';

function InputField({
  value, onChangeText, placeholder, secureTextEntry,
}) {
  const [isFocus, setFocus] = useState(false);

  const styles = StyleSheet.create({
    cardView: {
      width: 240,
      paddingVertical: 6,
      marginBottom: 0,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,.12)',
      elevation: isFocus ? 2 : 0,
    },
    textInput: {
      fontSize: 20,
    },
  });

  return (
    <CardView style={styles.cardView}>
      <TextInput
        style={styles.textInput}
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

InputField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

InputField.defaultProps = {
  value: '',
  placeholder: 'placeholder',
  onChangeText: null,
  secureTextEntry: false,
};

export default InputField;
