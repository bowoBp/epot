import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const IsMe = ({text, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatcontent}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Text style={styles.date}>{desc}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  chatcontent: {
    backgroundColor: colors.cardLight,
    fontSize: 14,
    padding: 12,
    paddingRight: 18,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
});
