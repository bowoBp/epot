import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IConOnline, IConStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedDoctor = ({pic, name, profesiom, active, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image source={pic} style={styles.avatar} />
        {active ? <IConOnline style={styles.icon} /> : null}
      </View>
      <View style={styles.profile}>
        <Text style={styles.name}> {name}</Text>
        <Text style={styles.category}>{profesiom}</Text>
      </View>

      <View style={styles.rated}>
        <IConStar />
        <IConStar />
        <IConStar />
        <IConStar />
        <IConStar />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  avatarwapper: {width: 30, height: 30},
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
    marginBottom: 16,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rated: {flexDirection: 'row'},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    marginTop: 2,
    marginLeft: 5,
    textTransform: 'capitalize',
  },
  profile: {flex: 1},
  icon: {position: 'absolute', bottom: 15, right: 13},
});
