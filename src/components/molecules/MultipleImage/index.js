import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {gunung} from '../../../assets';
import {colors, fonts} from '../../../utils';

const MultipleImage = ({source}) => {
  return <Image source={source} style={styles.image} />;
};

export default MultipleImage;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    padding: 5,
    margin: 5,
  },
});
