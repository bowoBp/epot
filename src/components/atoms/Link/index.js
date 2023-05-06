import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Link = ({title, size, align, onPress, blue}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align, blue)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align, blue) => ({
    fontSize: size,
    color: blue ? colors.blue : colors.text.secondary,
    fontFamily: fonts.primary.normal,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
