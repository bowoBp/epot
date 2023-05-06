import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyHospital1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListHospital = ({type, name, address, pic}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.img} />
      <View>
        <Text style={styles.name}>{type} </Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  img: {width: 80, height: 60, borderRadius: 11, marginRight: 16},
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
    textTransform: 'capitalize',
  },
});
