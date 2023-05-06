import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {Button, Gap} from '../../atoms';
import Darkprofile from './Darkprofile';

const Header = ({onPress, title, type, name, category, photo}) => {
  if (type === 'dark-profile') {
    return (
      <Darkprofile
        onPress={onPress}
        name={name}
        category={category}
        photo={photo}
      />
    );
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical:
      type === 'Detail-Laporan'
        ? 10
        : type === 'verifikasi'
        ? 10
        : type === 'Cari Lokasi'
        ? 10
        : 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: (type) => ({
    textTransform: 'capitalize',
    textAlign: 'center',
    flex: 1,
    fontSize: type === 'Detail-Laporan' ? 15 : 20,
    //color: type === 'dark' ? colors.white : colors.text.primary,
    color: colors.text.HeaderText,
  }),
});
