import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc, photo, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.borderprofile} onPress={onPress}>
        <Image source={photo} style={styles.avatar} />
      </TouchableOpacity>
      {name && (
        <>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profesion}>{desc}</Text>
        </>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  avatar: {width: 110, height: 110, borderRadius: 130 / 2},
  borderprofile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {alignItems: 'center', justifyContent: 'center'},
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textTransform: 'capitalize',
  },
  profesion: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
    textTransform: 'capitalize',
  },
});
