import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor9} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Other = ({text, desc, photo}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={photo} />
      <View>
        <View style={styles.chatcontent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{desc}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  chatcontent: {
    backgroundColor: colors.primary,
    fontSize: 14,
    padding: 12,
    maxWidth: '100%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
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
    color: colors.white,
  },
  avatar: {width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12},
});
