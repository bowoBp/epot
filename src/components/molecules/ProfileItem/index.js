import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const profileItem = ({type, desc}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{type}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default profileItem;

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 16,
  },
});
