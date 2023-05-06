import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const HomeProfile = ({onPress, routeParam}) => {
  const profile = routeParam;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={profile.photo} style={styles.avatar} />
      </TouchableOpacity>

      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profesion}</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  avatar: {width: 45, height: 45, borderRadius: 45 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
