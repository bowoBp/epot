import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const Darkprofile = ({onPress, name, category, photo}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.wrappertext}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <Image source={photo} style={styles.image} />
    </View>
  );
};

export default Darkprofile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrappertext: {flex: 1},
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.background,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  category: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.category,
    textAlign: 'center',
    marginTop: 6,
    textTransform: 'capitalize',
  },
  image: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 9},
});
